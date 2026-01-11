'use server'

import { cookies } from 'next/headers'
import { auth } from '../auth'
import { headers } from "next/headers"

export async function logout() {
  try {
    const cookieStore = await cookies()
    const isLogedWithEmail = cookieStore.get('accessToken')

    if (isLogedWithEmail) {
      cookieStore.delete('accessToken')
      cookieStore.delete('userData')
    } else {
      const response = await auth.api.signOut({
        headers: await headers()
      })
      console.log(response)
    }

    return {
      message: 'Você foi deslogado com sucesso.',
      status: 'success',
    }
  } catch (error) {
    console.error('Erro ao deslogar:', error)
    console.log(error)

    return {
      message: 'Ocorreu um erro ao tentar deslogar. Tente novamente.',
      status: 'error',
    }
  }
}
