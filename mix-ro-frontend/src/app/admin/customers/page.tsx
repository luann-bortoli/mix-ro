'use client'

import AdminSectionHeader from '@/src/shared/_components/ui/admin-section-header/AdminSectionHeader'
import s from './Costumers.module.css'
import { SectionProps } from './_module/data'
import { ChevronDown, Eye, Funnel, Search } from 'lucide-react'
import Pagination from '@/src/shared/_components/ui/pagination/Pagination'
import customerService from './_module/_services/customerService'
import { useEffect, useState } from 'react'
import { Customer } from './_module/types'
import { PageData } from '@/src/shared/types'
import { format } from '@/src/shared/utils/text'
import CustomerDetailsModal from './_module/_components/customer-details-modal/CustomerDetailsModal'

export default function Costumers() {

    const [customerData, setCustomerData] = useState<Customer[]>([])
    const [pageData, setPageData] = useState<PageData>({
        page: 0,
        size: 10,
        totalElement: 0,
        totalPages: 0,
        first: false,
        last: false
    })

    const [detailsContent, setDetaillContent] = useState<Customer>()

    useEffect(() => {
        const fetchCustomers = async () => {
            try
            {
                const data = await customerService.findAll({
                    page: pageData.page,
                    size: pageData.size
                })

                setCustomerData(data.content)

                setPageData(prev => ({
                    ...prev,
                    page: data.page,
                    size: data.size,
                    totalElement: data.totalElements,
                    totalPages: data.totalPages,
                    first: data.first,
                    last: data.last
                }))
            } catch (error)
            {
                console.error('Erro ao buscar clientes:', error)
            }
        }

        fetchCustomers()
    }, [pageData.page, pageData.size])

    return (
        <>
            {
                detailsContent
                && <CustomerDetailsModal
                    onClose={() => setDetaillContent(undefined)}
                    content={detailsContent}
                />
            }

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
                            {customerData.map((customer) => {
                                return (
                                    <tr key={customer.cpf}>
                                        <td>{customer.name}</td>
                                        <td>{customer.email}</td>
                                        <td>{format.phone(customer.phone)}</td>
                                        <td>{format.date(customer.createdAt)}</td>
                                        <td>
                                            <button
                                                onClick={() => setDetaillContent(customer)}
                                                className={s.expandButton}
                                            >
                                                <Eye className={s.expandIcon} />
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>

                    <div className={s.paginationWrapper}>
                        <Pagination
                            currentPage={pageData.page}
                            totalPages={pageData.totalPages}
                            onPageChange={(page) => {
                                setPageData(prev => ({
                                    ...prev,
                                    page
                                }))
                            }}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}