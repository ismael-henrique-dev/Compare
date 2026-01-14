import { loadProductList } from '@/services/product-service'
import { ProductsList } from './products-list'

export async function ProductsData() {
  const products = await loadProductList()

  return <ProductsList products={products} />
}
