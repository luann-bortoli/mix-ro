import s from './AdminSectionTitle.module.css'

import { AdminSection } from './types'

export default function AdminSectionTitle({ path, icon: Icon, title, description }: AdminSection) {
    return (
        <>
            <div className={s.mainWrapper}>
                <p className={s.pathLabel}>{path}</p>

                <div className={s.rowWrapper}>
                    <Icon className={s.icon} />

                    <div className={s.textWrapper}>
                        <h3 className={s.title}>{title}</h3>
                        <p className={s.description}>{description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}