import s from './AdminSectionTitle.module.css'

import { AdminSection } from './types'

export default function AdminSectionTitle({ path, icon: Icon, title, description }: AdminSection) {
    return (
        <>
            <div className={s.mainWrapper}>
                <div className={s.topText}>{path}</div>

                <div className={s.rowWrapper}>
                    <Icon />

                    <div className={s.textWrapper}>
                        <p className={s.title}>{title}</p>
                        <p className={s.description}>{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}