import { Metadata } from 'next'
import { AlertLists} from '@/components/alerts/alerts'
import { Search } from '@/components/ui/search'
import Pagination from '@/components/ui/pagination'
import { Alert } from '@/types/alert'

export const metadata: Metadata = {
  title: 'Alertas',
}

const MOCK_ALERTS: Alert[] = Array.from({ length: 20 }).map((_, i) => ({
  id: i,
  title: 'Placa de Video Galax',
  minPrice: 'R$ 200,00',
  maxPrice: ' 879,00',
  image: '/placeholder-gpu.png', // Substitua pelo caminho da sua imagem de GPU
}))

const numAlerts = MOCK_ALERTS.length

export default async function Alerts(props: {
  searchParams?: Promise<{
    query?: string
    page?: string
  }>
}) {
  const searchParams = await props.searchParams
  const query = searchParams?.query || ''
  // const currentPage = Number(searchParams?.page) || 1

  const alertsFiltered = MOCK_ALERTS.filter((alert) =>
    alert.title.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className='w-full h-full pt-4 sm:pt-6 md:pt-7 pb-4 sm:pb-6 md:pb-7'>
      <div className='flex flex-row justify-between items-start sm:items-center px-4 sm:px-6 md:px-7 pb-4 sm:pb-6 md:pb-7 gap-3 sm:gap-0'>
        <div className='flex flex-row items-center'>
          <span className='font-semibold pr-1 text-sm sm:text-base md:text-lg'>{numAlerts}</span>
          <span className='text-sm md:text-base'>Alertas</span>
        </div>

        <Search placeholder='Buscar alertas...' />
      </div>

      <AlertLists alerts={alertsFiltered} />

      <div className='flex w-full justify-center pt-6 sm:pt-7 md:pt-2'>
        <Pagination totalPages={10} />
      </div>
    </div>
  )
}

