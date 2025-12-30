import { HomeBanner } from '@/components/home/banner'
import ProductLists from '@/components/home/products'
import Stores from '@/components/home/stores'

export default function Home() {
  return (
    <div className='bg-accent p-5'>
      <HomeBanner />
      <Stores />
      <ProductLists />
    </div>
  )
}
