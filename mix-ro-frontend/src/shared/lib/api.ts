import { ProblemDetail } from '@/src/shared/types'
import axios from 'axios'

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true,
    timeout: 10000
})

api.interceptors.response.use(
    response => response,
    error => {
        if (axios.isAxiosError<ProblemDetail>(error))
        {
            const problemDetail = error.response?.data

            if (problemDetail?.title && problemDetail?.status)
            {
                return Promise.reject(problemDetail)
            }
        }
        return Promise.reject(error)
    }
)

export default api