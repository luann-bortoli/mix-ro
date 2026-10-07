import Link from 'next/link'
import s from './CustomerHeader.module.css'

export default function CustomerHeader(){
    return(
        <>
            <div className={s.contentContainer}>
                <div className={s.contentWrapper}>
                    <img src="\images\logo\full-logo-chocolate.svg" className={s.logo} />

                    <nav className={s.navWrapper}>
                        <ul className={s.navList}>

                            <li className={s.navItem}>
                                <Link href={"#"}></Link>
                            </li>
                            
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}