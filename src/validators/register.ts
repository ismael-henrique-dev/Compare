import { z } from "zod"

export const registerFormSchema = z.object({
  name: z.string(),
  email: z.string().email('Digite um email válido.'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres.'),
})

export type RegisterFormData = z.infer<typeof registerFormSchema>