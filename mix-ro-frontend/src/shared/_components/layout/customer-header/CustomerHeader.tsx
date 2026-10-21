
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import s from './CustomerHeader.module.css'
import { CustomerHeaderNavData } from './data'
import CustomerSearch from './_components/Search/Search'
import UserMenu from './_components/UserMenu/UserMenu'

export default function CustomerHeader() {
    const pathname = usePathname()

    return (
        <div className={s.contentContainer}>
            <div className={s.contentWrapper}>
                <Link href="/" aria-label="MixRô — página inicial">
                    <img
                        src="/images/logo/full-logo-chocolate.svg"
                        alt="MixRô Doceria"
                        className={s.logo}
                    />
                </Link>

                <nav className={s.navWrapper}>
                    <ul className={s.navList}>
                        {CustomerHeaderNavData.map((item) => {
                            const isActive =
                                item.href === '/'
                                    ? pathname === '/'
                                    : pathname.startsWith(item.href)

                            return (
                                <li
                                    key={item.href}
                                    className={`${s.navItem} ${isActive ? s.active : ''}`}
                                >
                                    <Link href={item.href}>
                                        {item.label}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>

                <div className={s.actionWrapper}>
                    <CustomerSearch />
                    <UserMenu />
                </div>
            </div>
        </div>
    )
}
