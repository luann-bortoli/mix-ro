import { Customer } from "@/src/app/admin/customers/_module/types"
import api from "@/src/shared/lib/api"

export const session = {

    logout: async () => {

        await api.post("/auth/logout")
    },

    me: async (): Promise<Customer> => {

        const response = await api.get<Customer>("/auth/me")

        return response.data;
    }
}
