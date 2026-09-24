'use client'

import Link from 'next/link'
import s from './AdminSidebar.module.css'

import { SidebarData } from './data'

import { usePathname } from 'next/navigation'


export default function AdminSidebar() {

    const pathName = usePathname()

    return (
        <>
            <div className={s.sidebarWrapper}>

                <div className={s.brandContainer}>
                    <img src="\images\logo\full-logo-white.svg" alt="mix-ro" />
                </div>

                <ul>
                    {SidebarData.map((item) => {

                        const isActive =
                            pathName === item.href ||
                            pathName.endsWith(`${item.href}/`);

                        return (
                            <Link key={item.href} className={s.itemLink} href={item.href}>
                                <li className={isActive ? s.active : undefined}>

                                    <item.icon className={s.itemIcon} />

                                    {item.label}

                                </li>
                            </Link>

                        )
                    })}
                </ul>

            </div>
        </>
    )
}