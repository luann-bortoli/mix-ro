import { z } from 'zod'

export const loginSchema = z.object({
    email: z
        .email()
        .trim()
        .min(3, "Email muito curto.")
        .max(64, "Email muito comprido."),

    password: z
        .string()
        .trim()
        .min(8, "Senha muito curta")
        .max(32, "Senha muito comprida")
})

export type LoginSchema = z.infer<typeof loginSchema>