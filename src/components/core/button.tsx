import { Button as BaseButton } from '@/components/ui/button'
import { Spinner } from '../ui/spinner'

type ButtonProps = {
  children: React.ReactNode
  isLoading?: boolean
} & React.ComponentProps<'button'>

export function Button({ children, isLoading = false }: ButtonProps) {
  return (
    <BaseButton>{isLoading ? <Spinner size='small' /> : children}</BaseButton>
  )
}
