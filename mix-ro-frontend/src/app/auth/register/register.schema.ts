import { brazilianStates } from '@/src/shared/types'
import { databaseFormat } from '@/src/shared/utils/text'
import { object, z } from 'zod'

export const registerSchema = z.object({
    name: z
        .string()
        .trim()
        .min(3, "Nome muito curto")
        .max(64, "Nome muito comprido")
    ,
    email: z
        .email("Email inválido")
        .trim()
        .min(3, "Nome muito curto")
        .max(64, "Nome muito comprido")
    ,
    password: z
        .string()
        .trim()
        .min(8, "Senha muito curta")
        .max(32, "Senha muito longa")
    ,
    cpf: z
        .string()
        .transform(databaseFormat.cpf)
        .pipe(
            z.string()
                .length(11, 'Deve conter 11 dígitos')
        )
    ,
    cep: z
        .string()
        .transform(databaseFormat.cep)
        .pipe(
            z.string()
                .length(8, 'Deve conter 8 dígitos')
        )
    ,
    phone: z
        .string()
        .transform(databaseFormat.phone)
        .pipe(
            z.string()
                .min(10, 'Telefone muito curto')
                .max(11, 'Telefone muito comprido')
        )
    ,
    state: z
        .enum(brazilianStates)
    ,
    city: z
        .string()
        .trim()
        .min(3, "Cidade muito curta")
        .max(64, "Cidade muito comprida")
    ,
    neighborhood: z
        .string()
        .trim()
        .min(3, "Bairro muito curto")
        .max(64, "Bairro muito comprida")
    ,
    street: z
        .string()
        .trim()
        .min(3, "Rua muito curta")
        .max(64, "Rua muito comprida")
    ,
    number: z
        .string()
        .trim()
        .min(1, "Informe o número")
        .max(8, "Número muito comprido")
    ,
    complement: z
        .string()
        .trim()
        .max(64, "Complemento muito comprido")

})

export type RegisterSchema = z.infer<typeof registerSchema>