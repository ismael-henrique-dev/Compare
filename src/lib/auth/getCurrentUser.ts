// src/lib/auth/getCurrentUser.ts
import { cookies } from 'next/headers'
import { auth } from '@/lib/auth'

export async function getCurrentUser(): Promise<User | null> {
  const cookieStore = await cookies()
  const userCookie = cookieStore.get('userData')


  if (userCookie) {
    try {
      return JSON.parse(userCookie.value) as User
    } catch {
      return null
    }
  }

  const session = await auth.api.getSession({
    headers: {
      cookie: cookieStore.toString(),
    },
  })

  if (!session?.user) return null

  return {
    name: session.user.name,
    email: session.user.email,
    imageURL: session.user.image ?? '',
  }
}
