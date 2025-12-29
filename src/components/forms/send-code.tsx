'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../ui/input-otp'
import { redirect, useRouter } from 'next/navigation'
import { useState } from 'react'

type SendCodeFormProps = React.ComponentProps<'form'> & {
  apiCode: string
}

export function SendCodeForm({
  className,
  apiCode,
  ...props
}: SendCodeFormProps) {

  const router = useRouter()
  
  const handleBack = () => {
    router.back()
  }
  
  const [code, setCode] = useState('')
  const [error, setError] = useState('')

  function handleChange(value: string) {
    const onlyNumbers = value.replace(/\D/g, '')
    setCode(onlyNumbers)
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    if (code.length !== 6) {
      setError('Digite o código completo')
      return
    }

    if (code !== apiCode) {
      setError('Código inválido')
      return
    }

    redirect('/forgot-password/new-password')
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className={cn('flex flex-col gap-6 p-5 pt-0', className)} {...props}
    >
      <div className='flex flex-col items-center gap-2 text-center'>
        <h1 className='font-poppins text-2xl font-semibold text-left'>
          Recuperação de senha
        </h1>
        <p className='font-poppins text-muted-foreground lg:text-base text-sm text-left'>
          Informe o código de confirmação abaixo.
        </p>
      </div>
      <div className='grid gap-4'>
        <div className='flex justify-center'>
          <InputOTP maxLength={6}
            value={code}
            onChange={handleChange}
            inputMode="numeric"
            pattern="[0-9]*"
            id= 'code'
          >
            <InputOTPGroup className='grid w-full grid-cols-6 gap-4'>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        {error && (
          <p className='text-red-700 text-sm'>
            {error}
          </p>
        )}
      </div>
      <Button
          type='submit'
          className='w-full cursor-pointer'
          variant='authprimary'
        >
          <p className='font-rubik text-[16px]'>Concluir</p>
        </Button>

        <Button
          type='button'
          variant='authSecondary'
          onClick={handleBack}
          className='w-full cursor-pointer'
        >
          <p className='font-rubik text-[16px]'>Voltar</p>
        </Button>
    </form>
  )
}
