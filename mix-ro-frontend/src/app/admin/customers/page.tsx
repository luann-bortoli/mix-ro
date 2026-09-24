import AdminSectionTitle from '@/src/shared/_components/ui/admin-section-title/AdminSectionTitle'
import s from './Costumers.module.css'
import { SectionProps } from './data'

export default function Costumers() {
    return (
        <>
            <div className={s.contentWrapper}>
                <AdminSectionTitle
                    path={SectionProps.path}
                    icon={SectionProps.icon}
                    title={SectionProps.title}
                    description={SectionProps.description}
                />
            </div>
        </>
    )
}