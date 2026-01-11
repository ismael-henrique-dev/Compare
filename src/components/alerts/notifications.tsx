import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { IconDotsVertical } from '@tabler/icons-react'
import Link from 'next/link'
import { Notification } from '@/types/notifications'

const MOCK_NOTIFICATIONS: Notification[] = Array.from({ length: 7 }).map(
  (_, i) => ({
    id: i,
    title: 'Placa de Video Galax',
    shop: 'Terabyte',
    price: ' 879,00',
    image: '/placeholder-gpu.png',
  })
)

// --- SUB-COMPONENTE: CARD DA NOTIFICAÇÃO ---
function NotificationCard({ notification }: { notification: Notification }) {
  return (
    <Card className='border-none shadow-none bg-white rounded-lg overflow-hidden flex flex-row w-full p-0 gap-0 min-h-30 sm:min-h-35 md:min-h-40'>
      {/* Imagem */}
      <div className='relative w-[40%] bg-[#F5F5F5]'>
        <Image
          src={notification.image || '/placeholder-gpu.png'}
          alt={notification.title}
          fill
          className='object-contain'
        />
      </div>

      {/* Conteúdo */}
      <CardContent className='flex flex-col justify-between w-[60%] p-3 sm:p-4 md:p-5'>
        <div className='flex justify-between gap-3'>
          <div>
            <h3 className='font-bold text-sm sm:text-base md:text-lg leading-tight'>
              {notification.title}
            </h3>

            <span className='text-xs sm:text-sm text-text-primary'>
              Menor preço via {notification.shop}
            </span>
          </div>

          <button className='w-5 h-5 sm:w-6 sm:h-6'>
            <IconDotsVertical className='text-[#1B7E2F]' />
          </button>
        </div>

        <div className='text-right'>
          <span className='font-bold text-sm sm:text-base md:text-lg text-[#1B7E2F]'>
            {notification.price}
          </span>
        </div>
      </CardContent>
    </Card>
  )
}

// --- COMPONENTE PRINCIPAL EXPORTADO ---
export function NotificationLists({
  notifications,
}: {
  notifications: Notification[]
}) {
  return (
    <div className='flex flex-col gap-x-6 gap-y-5'>
      {notifications.map((notification: Notification) => (
        <div key={notification.id}>
          <NotificationCard notification={notification} />
        </div>
      ))}
    </div>
  )
}

export function NotificationContent() {
  return (
    <div className='flex flex-col pr-5 pl-5'>
      <div className='flex flex-row justify-between pt-1 pb-5'>
        <h1 className='text-5 font-bold'>Notificações</h1>
        <Link href={'/platform/alerts'} className='text-4 text-brand underline'>
          VER ALERTAS
        </Link>
      </div>
      <NotificationLists notifications={MOCK_NOTIFICATIONS} />
    </div>
  )
}

export default NotificationContent
