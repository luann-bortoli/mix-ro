"use client"

import { useContext } from "react"
import { CurrentUserContext } from "../providers/currentUserContext"

export function useCurrent() {
    const context = useContext(CurrentUserContext)

    if (!context)
    {
        throw new Error("useCurrent deve ser usado dentro de <CurrentUserProvider>")
    }

    return context
}