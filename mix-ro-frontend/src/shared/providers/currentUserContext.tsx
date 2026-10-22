"use client"

import {
    createContext,
    useCallback,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from "react"
import axios from "axios"

import type { Customer } from "@/src/app/admin/customers/_module/types"
import { session } from "../lib/session"

export type CurrentUserContextValue = {

    user: Customer | null
    name: string | undefined
    role: string | undefined
    isAdmin: boolean
    isAuthenticated: boolean
    isLoading: boolean

    refresh: () => Promise<Customer | null>
    logout: () => Promise<void>
}

export const CurrentUserContext = createContext<CurrentUserContextValue | null>(null)

function getStatus(error: unknown): number | undefined {
    if (axios.isAxiosError(error)) return error.response?.status
    return (error as { status?: number } | null)?.status
}

const normalizeRole = (role?: string) => role?.replace(/^ROLE_/, "")

export function CurrentUserProvider({ children }: { children: ReactNode }) {

    const [user, setUser] = useState<Customer | null>(null)
    const [isLoading, setIsLoading] = useState(true)

    const refresh = useCallback(async () => {
        try
        {
            const me = await session.me()
            setUser(me)
            return me
        } catch (error)
        {
            if (![401, 403].includes(getStatus(error) ?? 0))
            {
                console.error("Falha ao carregar usuário atual", error)
            }
            setUser(null)
            return null
        }
    }, [])

    const logout = useCallback(async () => {
        try
        {
            await session.logout()
        } finally
        {
            setUser(null)
        }
    }, [])

    useEffect(() => {
        let active = true
        refresh().finally(() => {
            if (active) setIsLoading(false)
        })
        return () => {
            active = false
        }
    }, [refresh])

    const value = useMemo<CurrentUserContextValue>(() => {
        const role = user?.role
        return {
            user,
            name: user?.name,
            role,
            isAdmin: normalizeRole(role) === "ADMIN",
            isAuthenticated: user !== null,
            isLoading,
            refresh,
            logout,
        }
    }, [user, isLoading, refresh, logout])

    return (
        <CurrentUserContext.Provider value={value}>
            {children}
        </CurrentUserContext.Provider>
    )
}
