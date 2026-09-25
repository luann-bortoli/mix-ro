import s from './AdminFooter.module.css'

import { FooterModuleProps } from './_module/types'
import { FooterModuleData } from './_module/data'
import Link from 'next/link'

export default function AdminFooter() {
    return (
        <div className={s.contentWrapper}>
            <footer className={s.mainWrapper}>

                <div className={s.brandWrapper}>
                    <img
                        className={s.brandLogo}
                        src="images/logo/full-logo-chocolate.svg" alt="" />

                    <hr />

                    <p className={s.brandSlogan}>
                        Mais do que doces, <br />
                        É a nossa paixão.
                    </p>
                </div>

                <div className={s.modulesWrapper}>
                    <ul>
                        {FooterModuleData.map((module) => {
                            return (
                                <>

                                    <li><Link href={module.href}>{module.label}</Link></li>

                                </>
                            )
                        })}
                    </ul>
                </div>

                <div className={s.socialWrapper}>

                    <div className={s.socialContainer}>
                        <img
                            className={s.socialIcon}
                            src="images/icons/social/instagram-chocolate.svg" alt=""
                        />
                    </div>

                    <div className={s.socialContainer}>
                        <img
                            className={s.socialIcon}
                            src="images/icons/social/whatsapp-chocolate.svg" alt=""
                        />
                    </div>

                    <div className={s.socialContainer}>
                        <img
                            className={s.socialIcon}
                            src="images/icons/social/facebook-chocolate.svg" alt=""
                        />
                    </div>

                </div>



            </footer>
        </div>
    )
}