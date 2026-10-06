export type BrazilianStates =
    'AC' | 'AL' | 'AP' | 'AM' | 'BA' | 'CE' | 'DF' |
    'ES' | 'GO' | 'MA' | 'MT' | 'MS' | 'MG' | 'PA' |
    'PB' | 'PR' | 'PE' | 'PI' | 'RJ' | 'RN' | 'RS' |
    'RO' | 'RR' | 'SC' | 'SP' | 'SE' | 'TO'


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
    complement: string
    createdAt: string
    updatedAt: string
}