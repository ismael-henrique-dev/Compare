'use client'

import { IconDotsVertical } from '@tabler/icons-react'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuGroup,
} from '../ui/dropdown-menu'
import DialogAlertPrice from './dialog-alert-price'
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialog1,
} from '@/components/ui/alert-dialog'
import { Dialog, DialogTrigger } from '@/components/ui/dialog'

type MenuAlertProps = {
  MinPrice: string
  MaxPrice: string
}

// --- SUB-COMPONENTE: CARD DE PRODUTO ---
function MenuAlert({ MinPrice, MaxPrice }: MenuAlertProps) {
  function handleDelete() {
    console.log('Alerta pagado com sucesso')
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className='w-6 h-6'>
          <IconDotsVertical className='text-[#1B7E2F] shrink-0' size={24} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className='w-56' align='start'>
          <DropdownMenuGroup>
            <Dialog>
              <DialogTrigger asChild>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  Editar Alerta
                </DropdownMenuItem>
              </DialogTrigger>
              <DialogAlertPrice
                title='Editar alerta'
                description='Informe a nova faixa de preço do alerta.'
                MinPrice={MinPrice}
                MaxPrice={MaxPrice}
              />
            </Dialog>

            <AlertDialog>
              <AlertDialogTrigger asChild>
                <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                  Apagar alerta
                </DropdownMenuItem>
              </AlertDialogTrigger>

              <AlertDialog1
                title='Apagar alerta'
                description='Realmente deseja apagar o alerta?'
                background='red'
                OnClick={handleDelete}
              />
            </AlertDialog>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}

export default MenuAlert
