import { AxiosHttpClientAdapter } from '@/infra/adapters/axios-adapter'
import { ENV } from './env'

const BASE_URL = ENV.API_URL

export const httpClient = new AxiosHttpClientAdapter(BASE_URL)
