import AdminSectionHeader from '@/src/shared/_components/ui/admin-section-header/AdminSectionHeader'
import s from './ContactSources.module.css'
import { SectionProps } from './_module/data'

export default function ContactSources() {
    return (
        <>
            <div className={s.contentWrapper}>
                <AdminSectionHeader
                    path={SectionProps.path}
                    icon={SectionProps.icon}
                    title={SectionProps.title}
                    description={SectionProps.description}
                />
            </div>
        </>
    )
}