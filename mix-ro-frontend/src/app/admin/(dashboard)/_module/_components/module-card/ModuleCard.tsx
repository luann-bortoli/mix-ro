import Link from 'next/link'
import s from './ModuleCard.module.css'

import type { ModuleCardProps } from './types'
import { ArrowRight } from 'lucide-react'

export default function ModuleCard({ icon: Icon, title, description, href }: ModuleCardProps) {
    return (
        <>
            <div className={s.contentWrapper}>
                <div className={s.iconWrapper}>
                    <Icon className={s.icon} />
                </div>

                <h3 className={s.title}>{title}</h3>

                <p className={s.description}>{description}</p>

                <Link className={s.linkButton} href={href}><ArrowRight className={s.icon} /></Link>
            </div>
        </>
    )
}