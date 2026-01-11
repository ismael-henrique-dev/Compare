import { z } from "zod"

export const editFormSchema = z.object({
  name: z.string(),
  email: z.email('Digite um email válido.'),
  password: z.string().min(6, 'A senha deve ter pelo menos 6 caracteres.'),
})

export type EditFormData = z.infer<typeof editFormSchema>