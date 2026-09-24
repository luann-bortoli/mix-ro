import AdminSectionTitle from '@/src/shared/_components/ui/admin-section-title/AdminSectionTitle'
import s from './Dashboard.module.css'

import { SectionProps } from './data'

export default function Dashboard() {
    return (
        <>
            <AdminSectionTitle
                path={SectionProps.path}
                icon={SectionProps.icon}
                title={SectionProps.title}
                description={SectionProps.description} />
        </>
    )
}