import { ProductDTO } from '@/DTOs/product'
import { httpClient } from '@/lib/api'

export const loadProductList = async (): Promise<ProductDTO[]> => {
  const response = await httpClient.request<ProductDTO[]>({
    url: '/product/search',
    method: 'get',
  })

  console.log(response)
  return response.body
}
