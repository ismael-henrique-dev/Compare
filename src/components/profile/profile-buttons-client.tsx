'use client'

import { IconTrash, IconLogout } from '@tabler/icons-react'
import { ProfileButton } from './profile'
import { logout } from '@/lib/auth/logout'
import {
  AlertDialog,
  AlertDialog1,
  AlertDialogTrigger,
} from '../ui/alert-dialog'
import { startTransition } from 'react'
import { toast } from 'sonner'

export function ProfileButtonsClient() {
  const handleDeleteAccount = () => {
    console.log('Conta deletada com sucesso')
  }

  const handleLogout = async () => {
    startTransition(async () => {
      console.log('Deu')
      const response = await logout()
      console.log(response)
      if (response.status === 'success') {
        toast.success(response.message)
      } else {
        toast.error(response.message)
      }
    })
  }

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger>
          <ProfileButton icon={<IconTrash />} text='Deletar conta' />
        </AlertDialogTrigger>
        <AlertDialog1
          title='Deletar conta'
          description='Deseja deletar sua conta?'
          background='red'
          OnClick={handleDeleteAccount}
        />
      </AlertDialog>

      <AlertDialog>
        <AlertDialogTrigger>
          <ProfileButton icon={<IconLogout />} text='Logout' />
        </AlertDialogTrigger>
        <AlertDialog1
          title='Logout'
          description='Deseja sair?'
          background='red'
          OnClick={handleLogout}
        />
      </AlertDialog>
    </>
  )
}
