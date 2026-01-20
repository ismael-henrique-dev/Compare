import { FiltersSheet } from '@/components/results/filters-sheet'
import { ProductsData } from '@/components/results/products-data'
import { Suspense } from 'react'

export default async function Results(props: {
  searchParams?: Promise<{
    store?: string
    query?: string
    page?: number
    class?: string
  }>
}) {
  const searchParams = await props.searchParams

  return (
    <div className='p-5 space-y-10'>
      <div className='flex justify-between items-center'>
        <div className='space-x-1'>
          <strong className='text-xl'>234</strong>
          <span>produtos</span>
        </div>
        <FiltersSheet />
      </div>
      <Suspense fallback={'Carregando produtos...'}>
        <ProductsData />
      </Suspense>
    </div>
  )
}
