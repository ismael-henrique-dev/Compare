import { loadProductList } from '@/services/product-service'
import { ProductsList } from './products-list'

export async function ProductsData(params?: any) {
  const products = await loadProductList(params)

  return <ProductsList products={products} />
}
