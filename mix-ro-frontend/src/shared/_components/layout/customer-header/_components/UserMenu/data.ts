import { LogIn, UserPlus, Package, Heart, MapPin, UserRound, LockKeyhole, Headset, FileText, ShieldCheck } from "lucide-react"
import { UserMenuItem } from "./types"

export const GuestUserMenuData: UserMenuItem[] = [
    {
        label: 'Entrar',
        href: '/auth/login',
        icon: LogIn,
    },
    {
        label: 'Criar conta',
        href: '/auth/register',
        icon: UserPlus,
    },
]

export const CustomerUserMenuData: UserMenuItem[] = [
    {
        label: 'Favoritos',
        href: '/account/favorites',
        icon: Heart,
    },
    {
        label: 'Dados pessoais',
        href: '/account/profile',
        icon: UserRound,
    }
]

export const UserMenuFooterData: UserMenuItem[] = [
    {
        label: 'Fale conosco',
        href: '/contact',
        icon: Headset,
    }
]