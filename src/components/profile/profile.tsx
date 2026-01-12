import { IconX, IconUserEdit } from '@tabler/icons-react'
import { PopoverClose } from '../ui/popover'

import AvatarProfile from '../ui/avatar-profile'
import Link from 'next/link'
import { ProfileButtonsClient } from './profile-buttons-client'

type ProfileButtonProps = {
  icon: React.ReactNode
  text: string
}

function ProfileDetails({user}: UserProps) {
  return (
    <div>
      <div className='w-full justify-between flex-row flex'>
        <h1 className='text-base font-semibold'>Conta</h1>
        <PopoverClose>
          <IconX size={24} />
        </PopoverClose>
      </div>

      <div className='w-full h-full'>
        <UserInformations user={user}/>
        <ProfileButtons />
      </div>
    </div>
  )
}

function ProfileButtons() {
  return (
    <div className='flex flex-col gap-3'>
      <Link
        href='/platform/edit-profile'
        className='h-12 w-full bg-background flex flex-row items-center gap-2 rounded-lg pl-3'
      >
        <IconUserEdit size={24} />
        <h2 className='text-sm font-medium'>Alterar dados cadastrais</h2>
      </Link>

      <ProfileButtonsClient />
    </div>
  )
}

export function ProfileButton({ icon, text }: ProfileButtonProps) {
  return (
    <div className='h-12 w-full bg-background flex flex-row items-center gap-2 rounded-lg pl-3 cursor-pointer'>
      {icon}
      <h2 className='text-sm font-medium'>{text}</h2>
    </div>
  )
}

async function UserInformations( {user}: UserProps) {
  return (
    <div className='w-full justify-center flex flex-col items-center pb-10 gap-2'>
      <div>
        <AvatarProfile
          name={user.name}
          image={user.imageURL}
          size='xl'
          background='bg-[#1B7E2F]'
        />
      </div>
      <div className='justify-center flex flex-col items-center'>
        <h1 className='font-semibold text-xl'>{user.name}</h1>
        <p className='text-xs text-text-primary'>{user.email}</p>
      </div>
    </div>
  )
}

export default ProfileDetails
