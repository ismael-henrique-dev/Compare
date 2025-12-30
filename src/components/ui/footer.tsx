import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className='bg-brand flex justify-between items-center px-8 py-5'>
      <div className='space-y-3'>
        <Image src='/logo-system91.png' alt='Logo' width={328} height={96} />
        <p className='max-w-90 text-white'>
          Monte seu PC com a certeza do melhor negócio. Seu próximo setup de
          alto desempenho começa com a pesquisa inteligente.
        </p>
      </div>
      <div className='flex flex-col items-end gap-10'>
        <div className='flex flex-row gap-16'>
          <div className='flex flex-col '>
            <h2 className='font-medium text-white'>Legal</h2>
            <ul className='space-y-3 mt-2 underline text-white text-xs tracking-tight'>
              <li>
                <Link href='#'>Política de privacidade</Link>
              </li>
              <li>
                <Link href='#'>Termos de uso</Link>
              </li>
            </ul>
          </div>
          <div className='flex flex-col'>
            <h2 className='font-medium text-white'>Contato</h2>
            <ul className='space-y-3 mt-2 underline text-white text-xs tracking-tight'>
              <li>
                <Link href='#'>Email</Link>
              </li>
              <li>
                <Link href='#'>Telegram</Link>
              </li>
              <li>
                <Link href='#'>Telefone</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className='text-white'>
            Compare by System91. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
