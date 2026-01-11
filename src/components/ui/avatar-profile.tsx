import { Avatar, AvatarFallback, AvatarImage } from "./avatar"
import { getInitials } from "@/lib/utils"
import { cn } from "@/lib/utils"

type AvatarSize = "sm" | "md" | "lg" | "xl"

const avatarSizes: Record<AvatarSize, string> = {
  sm: "h-8 w-8 text-xs",
  md: "h-10 w-10 text-sm",
  lg: "h-12 w-12 text-base",
  xl: "h-16 w-16 text-xl",
}

export default function AvatarPerfil({
  name,
  image,
  background,
  size = "md",
}: AvatarProfileProps) {
  return (
    <Avatar className={avatarSizes[size]}>
      <AvatarImage src={image} alt={name} />

      <AvatarFallback className={cn('font-semibold text-white', background)}>
        {getInitials(name)}
      </AvatarFallback>
    </Avatar>
  )
}