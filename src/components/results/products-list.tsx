import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'

const MOCK_PRODUCTS = Array.from({ length: 8 }).map((_, i) => ({
  id: i,
  title: 'Placa de Video Galax',
  description: 'GTX 1650 4 GB GDDR6 128 Bits Asus TUF-GTX1650-4GD6-P-',
  store: 'Terabyte',
  price: 'R$ 879,00',
  image: '/placeholder-gpu.png', // Substitua pelo caminho da sua imagem de GPU
}))

export function ProductsList({ products }: { products: typeof MOCK_PRODUCTS }) {
  return (
    <div className='flex flex-wrap'>
      {products.map((product) => (
        <div
          key={product.id}
          // Ajuste das bases para comportar o tamanho real do card
          className='basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5 p-2'
        >
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  )
}

function ProductCard({ product }: { product: (typeof MOCK_PRODUCTS)[0] }) {
  return (
    <Card className='border-none shadow-none bg-white rounded-lg overflow-hidden flex flex-col'>
      {/* Área da Imagem com Fundo Cinza */}
      <div className='bg-[#F5F5F5] m-4 rounded-lg h-55 flex items-center justify-center overflow-hidden'>
        <div className='relative w-[80%] h-[80%]'>
          <Image
            src={product.image || '/placeholder-gpu.png'}
            alt={product.title}
            fill
            className='object-contain'
          />
        </div>
      </div>

      {/* Conteúdo do Card */}
      <CardContent className='px-4 pb-6 pt-0 flex flex-col justify-between flex-1'>
        <div className='space-y-2'>
          <h3 className='font-bold text-[#000000] text-xl leading-tight'>
            {product.title}
          </h3>

          <p className='text-sm text-[#71717A] font-normal leading-snug line-clamp-3'>
            {product.description}
          </p>

          <p className='text-sm text-[#71717A] font-normal pt-2'>
            Menor preço via{' '}
            <span className='text-[#71717A]'>{product.store}</span>
          </p>
        </div>

        {/* Preço em Destaque */}
        <div className='mt-4'>
          <span className='text-2xl font-bold text-[#16A34A]'>
            {product.price}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}
