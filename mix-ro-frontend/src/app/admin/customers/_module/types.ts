import { BrazilianStates } from "@/src/shared/types"

export type Customer = {
    id: string
    name: string
    email: string
    role: 'ROLE_CUSTOMER'
    cpf: string
    cep: string
    phone: string
    state: BrazilianStates
    city: string
    neighborhood: string
    street: string
    number: string
    complement?: string
    createdAt: string
    updatedAt: string
}