'use server'

import { cookies } from 'next/headers'
import { LoginFormData } from '@/validators/login'

const User = {
  token: '1',
  data:{
    name: 'Ismael Henrique',
    email: 'ismaelHenrique@gmail.com',
    password: '123456',
  }
}

export async function login(formData: LoginFormData) {
  if (formData.email !== User.data.email || formData.password !== User.data.password) {
    return { message: 'Email ou senha incorretos.', status: 'error' }
  }

  const expiresAt = new Date(Date.now() + 60 * 60 * 1000)

  const cookieStore = await cookies()

  cookieStore.set('accessToken', User.token, {
    path: '/',
    expires: expiresAt,
  })

  cookieStore.set('userData', JSON.stringify(User.data), {
    path: '/',
    expires: expiresAt,
  })

  return { message: 'Login realizado com sucesso.', status: 'success' }
}
