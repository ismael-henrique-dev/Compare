import { SendCodeForm } from '@/components/forms/send-code'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Enviar Código',
}

export default function SendCode() {
  return (
    <div className='grid min-h-svh lg:grid-cols-2'>
      <div className='bg-brand relative hidden w-full h-full lg:flex items-center justify-center'>
        <Image
          src='/logo-auth.png'
          alt='Compare Logo'
          width={256}
          height={256}
          className='h-auto w-92 object-contain'
          priority
        />
      </div>
      <div className='flex flex-col gap-4 md:p-10'>
        <div className='flex flex-1 items-center justify-center'>
          <div className='w-full md:max-w-sm'>
            <div className='w-full lg:hidden flex items-center justify-center mb-6'>
              <Image
                src='/logo-auth.png'
                alt='Compare Logo'
                width={160}
                height={160}
                className='h-auto w-64 object-contain brightness-0'
                priority
              />
            </div>
            <SendCodeForm apiCode='123456'/>
          </div>
        </div>
      </div>
    </div>
  )
}
