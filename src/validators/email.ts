import { z } from "zod"

export const sendEmailSchema = z.object({
  email: z.string().email('Digite um email válido.')
})

export type SendEmailData = z.infer<typeof sendEmailSchema>