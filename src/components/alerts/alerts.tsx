import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { Alert } from '@/types/alert'
import MenuAlert from './menu-alert'

// --- SUB-COMPONENTE: CARD DE PRODUTO ---
function AlertCard({ alert }: { alert: Alert }) {
  return (
    <Card className='border-none shadow-none bg-white rounded-lg overflow-hidden flex flex-row w-full min-h-27 sm:min-h-32] p-0 gap-0'>
      <div className='bg-[#F5F5F5] relative w-[35%] sm:w-[40%]'>
        <Image
          src={alert.image || '/placeholder-gpu.png'}
          alt={alert.title}
          fill
          className='object-contain'
        />
      </div>

      <CardContent className='flex flex-col justify-between w-[65%] sm:w-[60%] p-3 sm:p-4 md:p-5'>
        <div className='flex justify-between gap-2'>
          <h3 className='font-bold text-[#000000] text-xs sm:text-sm md:text-base leading-tight'>
            {alert.title}
          </h3>
          <MenuAlert MinPrice={alert.minPrice} MaxPrice={alert.maxPrice} />
        </div>

        <div className='mt-1 sm:mt-2 text-right'>
          <span className='font-bold text-xs sm:text-sm md:text-base text-[#1B7E2F]'>
            {alert.minPrice} – {alert.maxPrice}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

// --- COMPONENTE PRINCIPAL EXPORTADO ---
export function AlertLists({ alerts }: { alerts: Alert[] }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 px-4 sm:px-6'>
      {alerts.map((alert) => (
        <AlertCard key={alert.id} alert={alert} />
      ))}
    </div>
  )
}

export default AlertLists
