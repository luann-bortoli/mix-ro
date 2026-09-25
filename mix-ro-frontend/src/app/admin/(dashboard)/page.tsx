import AdminSectionHeader from '@/src/shared/_components/ui/admin-section-header/AdminSectionHeader'
import s from './Dashboard.module.css'

import { SectionProps } from './_module/data'
import ModuleCard from './_module/_components/module-card/ModuleCard'
import { ModulesCardContent } from './_module/data'

export default function Dashboard() {
    return (
        <>
            <div className={s.contentWrapper}>

                <AdminSectionHeader
                    path={SectionProps.path}
                    icon={SectionProps.icon}
                    title={SectionProps.title}
                    description={SectionProps.description}
                />

                <section className={s.modulesWrapper}>
                    <h2 className={s.modulesTitle}>Módulos do Sistema</h2>
                    <div className={s.line}></div>

                    <div className={s.modulesGrid}>
                        {ModulesCardContent.map((card) => {
                            return (
                                <>
                                    <ModuleCard
                                        icon={card.icon}
                                        title={card.title}
                                        description={card.description}
                                        href={card.href}
                                    />
                                </>
                            )
                        })}
                    </div>
                </section>


            </div>

            <img className={s.image} src="images/vector.svg" alt="" />

        </>
    )
}