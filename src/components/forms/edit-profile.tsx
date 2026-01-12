'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PasswordInput } from '../ui/password-input'
import { useTransition } from 'react'
import { redirect, useRouter } from 'next/navigation'
import { EditFormData, editFormSchema } from '@/validators/edit'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Spinner } from '../ui/spinner'


export function EditProfileForm() {
  function handleEdit() {}

  const router = useRouter()

  const handleBack = () => {
    router.back()
  }
  const [isPending, startTransition] = useTransition()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditFormData>({
    mode: 'onChange',
    resolver: zodResolver(editFormSchema),
  })

  return (
    <form onSubmit={handleEdit} className='w-full flex flex-col gap-6'>
      <h1 className='font-rubik text-xl font-semibold text-left'>
        Alterar dados
      </h1>
      <div className='grid gap-1'>
        <Label
          htmlFor='name'
          className='font-semibold font-rubik text-[##737373]'
        >
          Name
        </Label>
        <Input
          id='name'
          type='name'
          placeholder='Informe seu nome'
          aria-invalid={!!errors.name}
          {...register('name')}
          className='shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] border'
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
          placeholder='Insira sua senha'
          aria-invalid={!!errors.password}
          {...register('password')}
        />
        {errors.password && (
          <p className='text-red-700 text-sm'>{errors.password.message}</p>
        )}
      </div>
      <div className='justify-end gap-2 flex flex-row w-full'>
        
        <Button
          type='button'
          variant='authSecondary'
          onClick={handleBack}
          className='w-21 h-8 cursor-pointe shadow-sm box-shadow: 0px 1px 3px 0px #0000001A;'
        >
          <p className='font-medium text-sm font-rubik'>Cancelar</p>
        </Button>

        <Button
          type='submit'
          variant='authprimary'
          className='w-auto h-8 cursor-pointer bg-black'
          disabled={isPending}
        >
          {isPending && <Spinner />}
          {isPending ? (
            <p className='text-sm  font-rubik'>Alterando...</p>
          ) : (
            <p className='text-sm font-rubik'>Alterar</p>
          )}
        </Button>
      </div>
    </form>
  )
}
