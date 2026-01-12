import { FiltersSheet } from '@/components/results/filters-sheet'
import { ProductsList } from '@/components/results/products-list'

const MOCK_PRODUCTS = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  title: 'Placa de Video Galax',
  description: 'GTX 1650 4 GB GDDR6 128 Bits Asus TUF-GTX1650-4GD6-P-',
  store: 'Terabyte',
  price: 'R$ 879,00',
  image: '/placeholder-gpu.png', // Substitua pelo caminho da sua imagem de GPU
}))

export default function Results() {
  return (
    <div className='p-5 space-y-10'>
      <div className='flex justify-between items-center'>
        <div className='space-x-1'>
          <strong className='text-xl'>234</strong>
          <span>produtos</span>
        </div>
        <FiltersSheet />
      </div>
      <ProductsList products={MOCK_PRODUCTS} />
    </div>
  )
}
