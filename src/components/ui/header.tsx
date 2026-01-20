import { IconBell, IconUser } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import { Popover, PopoverContent, PopoverTrigger } from './popover'
import NotificationContent from '../alerts/notifications'
import PerfilDetails from '../profile/profile'
import AvatarPerfil from './avatar-profile'
import { getCurrentUser } from '@/lib/auth/getCurrentUser'
import { SearchBar } from './search-bar'

type HeaderProps = {
  showFilters?: boolean
}

const componentes = [
  { id: 'cpu', label: 'Processador' },
  { id: 'gpu', label: 'Placa de vídeo' },
  { id: 'psu', label: 'Fonte' },
  { id: 'cooler', label: 'Cooler' },
  { id: 'storage', label: 'Armazenamento' },
  { id: 'ram', label: 'Memória RAM' },
  { id: 'motherboard', label: 'Placa mãe' },
]

export async function Header({ showFilters = true }: HeaderProps) {
  const user = await getCurrentUser()
  console.log(user)

  return (
    <header>
      <div className='bg-brand p-6 flex justify-between items-center'>
        <Link href='/'>
          <Image src='/logo-header.png' alt='Logo' width={176} height={48} />
        </Link>

        <SearchBar placeholder='Buscar produto...' />

        <div>
          <nav>
            <ul className='flex gap-4'>
              <li>
                {!user ? (
                  <Link
                    href='/login'
                    className='rounded-4xl bg-green-glass/40 px-3 py-2 text-white font-medium items-center gap-2 flex'
                  >
                    <div className='rounded-full size-8 bg-white text-brand flex items-center justify-center'>
                      <IconBell stroke={2} size={24} />
                    </div>
                    Alertas
                  </Link>
                ) : (
                  <Popover>
                    <PopoverTrigger className='rounded-4xl bg-green-glass/40 px-3 py-2 text-white font-medium items-center gap-2 flex'>
                      <div className='rounded-full size-8 bg-white text-brand flex items-center justify-center'>
                        <IconBell stroke={2} size={24} />
                      </div>
                      Alertas
                    </PopoverTrigger>
                    <PopoverContent className='bg-background min-w-xs sm:w-md md:w-md h-140'>
                      <NotificationContent />
                    </PopoverContent>
                  </Popover>
                )}
              </li>
              <li>
                {!user ? (
                  <Link
                    href='/login'
                    className='rounded-4xl bg-green-glass/40 px-3 py-2 text-white font-medium flex items-center gap-2'
                  >
                    <div className='rounded-full size-8 bg-white text-brand flex items-center justify-center'>
                      <IconUser stroke={2} size={24} />
                    </div>
                    Fazer login
                  </Link>
                ) : (
                  <Popover>
                    <PopoverTrigger>
                      <AvatarPerfil
                        name={user.name}
                        image={user.imageURL}
                        size='lg'
                        background='bg-black'
                      />
                    </PopoverTrigger>
                    <PopoverContent className='min-w-90 md:w-160'>
                      <PerfilDetails user={user} />
                    </PopoverContent>
                  </Popover>
                )}
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {showFilters && (
        <div className='' role='filters'>
          {componentes.map((component) => (
            <button key={component.id} className='px-4 py-2 text-black'>
              {component.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
