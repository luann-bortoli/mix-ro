'use client'

import AdminSectionHeader from '@/src/shared/_components/ui/admin-section-header/AdminSectionHeader'
import s from './Costumers.module.css'
import { SectionProps } from './_module/data'
import { ChevronDown, Eye, Funnel, Search } from 'lucide-react'
import Pagination from '@/src/shared/_components/ui/pagination/Pagination'

export default function Costumers() {
    return (
        <>
            <div className={s.contentWrapper}>
                <AdminSectionHeader
                    path={SectionProps.path}
                    icon={SectionProps.icon}
                    title={SectionProps.title}
                    description={SectionProps.description}
                />

                <div className={s.dataWrapper}>
                    <div className={s.controlsWrapper}>

                        <div className={s.searchInputWrapper}>
                            <Search className={s.searchIcon} />
                            <input
                                className={s.searchInput}
                                type="text"
                                placeholder='Buscar por nome, email ou telefone...'
                            />
                        </div>

                        <div className={s.selectWrapper}>
                            <Funnel className={s.selectIcon} />

                            <select
                                className={s.select}
                                name=""
                                id="">
                                <option value="">Filtros</option>
                                <hr />
                                <option value="">Criação crescente</option>
                                <option value="">Criação decrescente</option>
                                <option value="">Alteração crescente</option>
                                <option value="">Alteração decrescente</option>
                            </select>

                            <ChevronDown className={s.selectIcon} />
                        </div>
                    </div>

                    <table className={s.dataTable}>
                        <thead>
                            <tr>
                                <th scope="col">Nome</th>
                                <th scope="col">E-mail</th>
                                <th scope="col">Telefone</th>
                                <th scope="col">Criação</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>João Silva</td>
                                <td>joao@email.com</td>
                                <td>(54) 99999-9999</td>
                                <td>13/09/2025</td>
                                <td>
                                    <button className={s.expandButton}><Eye className={s.expandIcon} /></button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <div className={s.paginationWrapper}>
                        <Pagination
                            currentPage={5}
                            totalPages={7}
                            onPageChange={() => 1}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}