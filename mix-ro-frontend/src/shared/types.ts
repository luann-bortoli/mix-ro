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