import Image from 'next/image'

interface AuthLogoProps {
  size?: number
  inverted?: boolean
  priority?: boolean
}

export function AuthLogo({
  size = 160,
  inverted = false,
  priority = false,
}: AuthLogoProps) {
  return (
    <Image
      src="/logo-auth.png"
      alt="Compare Logo"
      width={size}
      height={size}
      priority={priority}
      className={`h-auto object-contain ${
        inverted ? 'brightness-0' : ''
      }`}
    />
  )
}
