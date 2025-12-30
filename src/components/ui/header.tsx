import { IconBell, IconUser } from '@tabler/icons-react'
import Image from 'next/image'
import Link from 'next/link'
import { Search } from './search'

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

export function Header({ showFilters = true }: HeaderProps) {
  return (
    <header>
      <div className='bg-brand p-6 flex justify-between items-center'>
        <Link href='/'>
          <Image src='/logo-header.png' alt='Logo' width={176} height={48} />
        </Link>

        <Search placeholder='Buscar produto...' />
        <div>
          <nav>
            <ul className='flex gap-4'>
              <li>
                <button className='rounded-4xl bg-green-glass/40 px-3 py-2 text-white font-medium flex items-center gap-2'>
                  <div className='rounded-full size-8 bg-white text-brand flex items-center justify-center'>
                    <IconBell stroke={2} size={24} />
                  </div>
                  Alertas
                </button>
              </li>
              <li>
                <button className='rounded-4xl bg-green-glass/40 px-3 py-2 text-white font-medium flex items-center gap-2'>
                  <div className='rounded-full size-8 bg-white text-brand flex items-center justify-center'>
                    <IconUser stroke={2} size={24} />
                  </div>
                  Fazer login
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {showFilters && (
        <div className='' role='filters'>
          {componentes.map((component) => (
            <button
              key={component.id}
              className='px-4 py-2 text-black'
            >
              {component.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
