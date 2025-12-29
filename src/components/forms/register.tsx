'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PasswordInput } from '../ui/password-input'
import { useTransition } from 'react'
import { redirect } from 'next/navigation'
import { RegisterFormData, registerFormSchema } from '@/validators/register'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Spinner } from '../ui/spinner'
import { toast } from 'sonner'
import { FieldSeparator } from '../ui/field'
import { authClient } from '@/lib/auth-client'
import Link from 'next/link'
import { IconBrandGoogleFilled } from '@tabler/icons-react'

export function RegisterForm() {
  const [isPending, startTransition] = useTransition()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    mode: 'onChange',
    resolver: zodResolver(registerFormSchema),
  })

  const handleLoginUser = (data: RegisterFormData) => {
    startTransition(async () => {
      console.log(data)
      const response = 'success'

      if (response === 'success') {
        toast.success(response)
        redirect('/platform/home')
      } else {
        toast.error(response)
      }
    })
  }
  
  const handleLoginWithGoogleUser = async () => {
    await authClient.signIn.social({
      provider: "google",
    });
  };

  return (
    <form
      onSubmit={handleSubmit(handleLoginUser)}
      className='flex flex-col gap-6 p-5 pt-0'
    >
      <div className='flex flex-col items-center gap-1'>
        <h1 className='font-rubik text-2xl font-semibold text-left'>
          Cadastro
        </h1>
        <p className='font-rubik text-[oklch(0.552_0.016_285.938)] lg:text-base text-sm'>
          Informe algumas informações para criar sua conta.
        </p>
      </div>
      <div className='grid gap-6'>
        <div className='grid gap-1'>
          <Label htmlFor='name' className='font-semibold font-rubik'>
            Name
          </Label>
          <Input
            id='name'
            type='text'
            placeholder='Informe seu nome'
            {...register('name')}
          />
        </div>
        <div className='grid gap-6'>
          <div className='grid gap-1'>
            <Label htmlFor='name' className='font-semibold font-rubik'>
              Name
            </Label>
            <Input
              id='name'
              type='text'
              placeholder='Informe seu nome'
              {...register('name')}
            />
          </div>
          <div className='grid gap-1'>
            <Label htmlFor='email' className='font-semibold font-rubik'>
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
          <div className='grid gap-1'>
            <div className='flex items-center'>
              <Label htmlFor='password' className='font-semibold font-rubik'>
                Senha
              </Label>
            </div>
            <PasswordInput
              id='password'
              placeholder='Digite sua senha'
              aria-invalid={!!errors.password}
              {...register('password')}
            />
            {errors.password && (
              <p className='text-red-700 text-sm'>{errors.password.message}</p>
            )}
          </div>

          <Button
            type='submit'
            variant='authprimary'
            className='w-full cursor-pointer'
            disabled={isPending}
          >
            {isPending && <Spinner />}
            {isPending ? <p className='font-rubik text-[16px]'>Entrando...</p> : <p className='font-rubik text-[16px]'>Entrar</p>}
          </Button>

          <FieldSeparator className='grid gap-1 *:data-[slot=field-separator-content]:bg-card'>
            ou
          </FieldSeparator>

          <Button
            onClick={handleLoginWithGoogleUser}
            variant='authSecondary'
            type='button'
            className='w-full cursor-pointer'
          >
            <IconBrandGoogleFilled className="size-5 opacity-100 text-black"/>
            <p className='font-rubik text-[14px]'>Criar conta com Google</p>
          </Button>
          <div className='flex flex-row justify-center gap-1'>
            <p className='font-rubik text-sm text-text-primary text-[16px]'>
              Já tem uma conta?
            </p>
            <Link
              href='/login'
              className='text-sm underline-offset-2 underline font-rubik text-text-primary text-[16px]'
            >
              Entrar
            </Link>
          </div>
        </div>
        <div className='grid gap-1'>
          <div className='flex items-center'>
            <Label htmlFor='password' className='font-semibold font-rubik'>
              Senha
            </Label>
          </div>
          <PasswordInput
            id='password'
            placeholder='Digite sua senha'
            aria-invalid={!!errors.password}
            {...register('password')}
          />
          {errors.password && (
            <p className='text-red-700 text-sm'>{errors.password.message}</p>
          )}
        </div>

        <Button
          type='submit'
          className='w-full cursor-pointer'
          disabled={isPending}
        >
          {isPending && <Spinner />}
          {isPending ? 'Registrando...' : 'Registrar'}
        </Button>

        <FieldSeparator className='grid gap-1 *:data-[slot=field-separator-content]:bg-card'>
          ou
        </FieldSeparator>

        <Button onClick={handleLoginWithGoogleUser} variant='outline' type='button'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <path
              d='M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z'
              fill='currentColor'
            />
          </svg>
          Criar conta com Google
        </Button>
      </div>
    </form>
  )
}
