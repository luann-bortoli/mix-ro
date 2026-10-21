export type PageResponse<T> = {
    content: T[]
    page: number
    size: number
    totalElements: number
    totalPages: number
    first: boolean
    last: boolean
}

export type PageData = {
    page: number
    size: number
    totalElement: number
    totalPages: number
    first: boolean
    last: boolean
}

export const brazilianStates = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF',
    'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA',
    'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS',
    'RO', 'RR', 'SC', 'SP', 'SE', 'TO'
]

export type BrazilianStates =
    'AC' | 'AL' | 'AP' | 'AM' | 'BA' | 'CE' | 'DF' |
    'ES' | 'GO' | 'MA' | 'MT' | 'MS' | 'MG' | 'PA' |
    'PB' | 'PR' | 'PE' | 'PI' | 'RJ' | 'RN' | 'RS' |
    'RO' | 'RR' | 'SC' | 'SP' | 'SE' | 'TO'


type errorCode =
    | "RESOURCE_NOT_FOUND"
    | "RESOURCE_ALREADY_EXISTS"

export type ProblemDetail = {
    status: string
    title: string
    detail: string
    errorCode: errorCode
    resource: string
    identifier: string
}