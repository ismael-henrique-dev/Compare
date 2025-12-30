'use client'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { redirect, useRouter } from 'next/navigation'
import { SendEmailData, sendEmailSchema } from '@/validators/email'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTransition } from 'react'
import { toast } from 'sonner'
import { Spinner } from '../ui/spinner'

export function SendEmailForm({
  className,
  ...props
}: React.ComponentProps<'form'>) {
  const router = useRouter()

  const [isPending, startTransition] = useTransition()

  const handleBack = () => {
    router.back()
  }
  
  const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<SendEmailData>({
      mode: 'onChange',
      resolver: zodResolver(sendEmailSchema),
    })

  const handleSendEmail = () => {
    startTransition(async () => {
      const response = 'success'

      if (response === 'success') {
        toast.success(response)
        console.log('Deu certo')
        redirect('/forgot-password/code')
      } else {
        toast.error(response)
      }
    })
  }

  return (
    <form
      onSubmit={handleSubmit(handleSendEmail)} 
      className={cn('flex flex-col gap-6 p-5 pt-0', className)} {...props}
    >
      <div className='flex flex-col items-center gap-2 text-center'>
        <h1 className='font-poppins text-2xl font-semibold text-left'>
          Recuperação de senha
        </h1>
        <p className='font-poppins text-muted-foreground lg:text-base text-sm text-left'>
          Insira seu e-mail abaixo para receber o código de verificação.
        </p>
      </div>
      <div className='grid gap-6'>
        <div className='grid gap-1'>
          <Label htmlFor='email' className='font-semibold font-poppins'>
            Email
          </Label>
          <Input
            id='email'
            type='email'
            placeholder='m@example.com'
            aria-invalid={!!errors.email}
            {...register('email')}
          />
          {errors.email && (
            <p className='text-red-700 text-sm'>{errors.email.message}</p>
          )}
        </div>
        <Button
          type='submit'
          className='w-full cursor-pointer'
          disabled={isPending}
          variant='authprimary'
        >
          {isPending && <Spinner />}
          {isPending ? <p className='font-rubik text-[16px]'>Entrando...</p> : <p className='font-rubik text-[16px]'>Entrar</p>}
        </Button>

      </div>
      <Button
        onClick={handleBack}
        variant='authSecondary'
        className='w-full cursor-pointer'
      >
        <p className='font-rubik text-[16px]'>Voltar</p>
      </Button>
    </form>
  )
}
