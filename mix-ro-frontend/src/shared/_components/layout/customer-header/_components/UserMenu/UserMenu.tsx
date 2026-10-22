
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { User, ChevronRight, LogOut } from 'lucide-react'

import s from './UserMenu.module.css'
import {
    GuestUserMenuData,
    CustomerUserMenuData,
    UserMenuFooterData,
} from './data'
import { useCurrent } from '@/src/shared/hooks/useCurrent'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

export default function UserMenu() {

    const router = useRouter()

    const [isOpen, setIsOpen] = useState(false)

    const { user, name, isAuthenticated: isLoggedIn, isLoading, logout } = useCurrent()

    function closeMenu() {
        setIsOpen(false)
    }

    return (
        <div className={s.userMenuWrapper}>
            <button
                type="button"
                className={`${s.toggleUserCard} ${isOpen ? s.active : ''}`}
                aria-label={isOpen ? 'Fechar menu da conta' : 'Abrir menu da conta'}
                aria-expanded={isOpen}
                aria-controls="customer-user-menu"
                onClick={() => setIsOpen((open) => !open)}
            >
                <User />
            </button>

            {isOpen && (
                <div
                    id="customer-user-menu"
                    className={s.userDropdown}
                >
                    {isLoggedIn ? (
                        <>
                            <Link
                                href="/account/profile"
                                className={s.userAccountHeader}
                                onClick={closeMenu}
                            >
                                <span className={s.userAvatar}>
                                    <User />
                                </span>

                                <span className={s.userIdentity}>
                                    <strong>{name}</strong>
                                    <span>{user?.email}</span>
                                </span>

                                <ChevronRight className={s.accountArrow} />
                            </Link>

                            <ul className={s.userMenuList}>
                                {CustomerUserMenuData.map((item) => {
                                    const Icon = item.icon

                                    return (
                                        <li key={item.href}>
                                            <Link
                                                href={item.href}
                                                className={s.userMenuItem}
                                                onClick={closeMenu}
                                            >
                                                <Icon />
                                                <span>{item.label}</span>
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ul>

                            <div className={s.userMenuFooter}>
                                {UserMenuFooterData.map((item) => {
                                    const Icon = item.icon

                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={s.userMenuItem}
                                            onClick={closeMenu}
                                        >
                                            <Icon />
                                            <span>{item.label}</span>
                                        </Link>
                                    )
                                })}
                            </div>

                            <button
                                type="button"
                                className={s.logoutButton}
                                onClick={async () => {
                                    await logout()
                                    closeMenu()
                                    router.replace('/')
                                }}
                            >
                                <LogOut />
                                <span>Sair</span>
                            </button>
                        </>
                    ) : (
                        <>
                            <div className={s.guestHeader}>
                                <span className={s.guestAvatar}>
                                    <User />
                                </span>

                                <strong>Acesse sua conta</strong>

                                <p>
                                    Faça login para acompanhar seus pedidos,
                                    favoritos e muito mais.
                                </p>
                            </div>

                            <div className={s.guestActions}>
                                {GuestUserMenuData.map((item, index) => {
                                    const Icon = item.icon

                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={
                                                index === 0
                                                    ? s.loginButton
                                                    : s.registerButton
                                            }
                                            onClick={closeMenu}
                                        >
                                            <Icon />
                                            <span>{item.label}</span>
                                        </Link>
                                    )
                                })}
                            </div>

                            <div className={s.userMenuFooter}>
                                {UserMenuFooterData.map((item) => {
                                    const Icon = item.icon

                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={s.userMenuItem}
                                            onClick={closeMenu}
                                        >
                                            <Icon />
                                            <span>{item.label}</span>
                                        </Link>
                                    )
                                })}
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    )
}
