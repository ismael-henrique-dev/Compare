
import { EditProfileForm } from '@/components/forms/edit-profile'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alterar dados cadastrais',
}

export default function LoginPage() {
  return (
    <div className='w-full h-200 pr-7 pl-7 pt-6 bg-accent'>
      <EditProfileForm/>
    </div>
  )
}
