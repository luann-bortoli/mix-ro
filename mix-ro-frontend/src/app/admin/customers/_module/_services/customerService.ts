import api from "@/src/lib/axios/api"
import { PageResponse } from "@/src/shared/types"
import { Customer } from "../types"

type FindAllProps = {
    page?: number
    size?: number
    search?: string
}

const customerService =
{
    async findAll(params?: FindAllProps) {
        const response = await api.get<PageResponse<Customer>>('/users', {
            params
        })

        return response.data
    },

    async findById(id: string) {
        const response = await api.get<Customer>(`/users/${id}`)

        return response.data
    }
}

export default customerService