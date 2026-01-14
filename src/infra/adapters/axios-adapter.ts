import axios, { AxiosError, AxiosInstance } from 'axios'

// definição do formato da requisição
export type HttpRequest = {
  url: string
  method: 'get' | 'post' | 'put' | 'delete'
  body?: any
  headers?: any
  params?: any
}

// contrato do HttpClient
export interface HttpClient {
  request<R = any>(
    data: HttpRequest
  ): Promise<{
    statusCode: number
    body: R
  }>
}

// Implementação do HttpClient usando Axios
export class AxiosHttpClientAdapter implements HttpClient {
  private readonly axiosInstance: AxiosInstance

  constructor(baseURL?: string) {
    // Criamos uma instância dedicada do Axios
    this.axiosInstance = axios.create({
      baseURL: baseURL,
    })
  }

  async request<R = any>(
    data: HttpRequest
  ): Promise<{ statusCode: number; body: R }> {
    let axiosResponse
    try {
      // O método generic 'request' do axios permite passar o objeto de configuração
      axiosResponse = await this.axiosInstance.request({
        url: data.url,
        method: data.method,
        data: data.body,
        headers: data.headers,
        params: data.params,
      })
    } catch (error) {
      // Tratamento de erro específico do Axios
      const axiosError = error as AxiosError<{ message?: string }>
      throw new Error(axiosError.response?.data?.message || axiosError.message)
    }

    // Padronizando a resposta conforme o contrato do HttpClient
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data,
    }
  }
}
