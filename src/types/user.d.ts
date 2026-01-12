type User = {
  name: string
  email: string
  imageURL: string
}

type AvatarProfileProps = {
  name: string
  image?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  background: string
}

type UserProps = {
  user: User
}
