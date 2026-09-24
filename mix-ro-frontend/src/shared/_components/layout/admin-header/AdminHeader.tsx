'use client'

import { useState } from 'react'
import s from './AdminHeader.module.css'

import { ChevronDown, ChevronUp, Home, LogOut } from 'lucide-react'
import Link from 'next/link'

export default function AdminHeader() {

    const [dropdown, setDropdown] = useState(false)

    return (
        <>
            <header className={s.mainWrapper}>

                <Link
                    href={"/"}
                    className={s.homeLink}
                >
                    <Home className={s.homeIcon} />
                </Link>

                <div className={s.accountContainer}
                    onMouseEnter={() => setDropdown(true)}
                    onMouseLeave={() => setDropdown(false)}
                >

                    <img src="images\_shared\default-profile-pic.jpg" alt="" className={s.accountPic} />

                    <div className={s.infoWrapper}>
                        <div className={s.accountName}>Administrador</div>
                        <div className={s.accountEmail}>admin@mixro.com</div>
                    </div>

                    {dropdown ?
                        <ChevronDown className={s.infoArrowDown} />
                        :
                        <ChevronUp className={s.infoArrowDown} />
                    }

                    {dropdown &&
                        <div className={s.dropdown}>
                            <button className={s.logoutButton}>
                                <LogOut className={s.logoutIcon} />
                                <p className={s.logoutLabel}>Sair</p>
                            </button>
                        </div>
                    }

                </div>

            </header>
        </>
    )
}