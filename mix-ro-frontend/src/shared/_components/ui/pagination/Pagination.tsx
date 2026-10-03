'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import s from './Pagination.module.css'

interface PaginationProps {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

export default function Pagination({
    currentPage,
    totalPages,
    onPageChange
}: PaginationProps) {
    if (totalPages <= 1) return null

    const pages = Array.from(
        { length: totalPages },
        (_, index) => index
    )

    return (
        <nav className={s.pagination} aria-label="Paginação">
            <button
                type="button"
                className={s.actionButton}
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 0}
                aria-label="Página anterior"
            >
                <ChevronLeft size={16} />
            </button>

            {pages.map(page => (
                <button
                    key={page}
                    type="button"
                    className={`${s.pageButton} ${page === currentPage ? s.active : ''
                        }`}
                    onClick={() => onPageChange(page)}
                    aria-current={page === currentPage ? 'page' : undefined}
                >
                    {page + 1}
                </button>
            ))}

            <button
                type="button"
                className={s.actionButton}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages - 1}
                aria-label="Próxima página"
            >
                <ChevronRight size={16} />
            </button>
        </nav>
    )
}