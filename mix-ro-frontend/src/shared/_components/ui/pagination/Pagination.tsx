'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import s from './Pagination.module.css'

type PaginationProps = {
    currentPage: number
    totalPages: number
    onPageChange: (page: number) => void
}

export default function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {

    const pages = Array.from(
        { length: totalPages },
        (_, index) => index
    )

    return (
        <nav className={s.pagination}>
            <button
                type="button"
                className={s.actionButton}
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 0}
            >
                <ChevronLeft size={16} />
            </button>

            {pages.map(page => (
                <button
                    key={page}
                    type="button"
                    className={`${s.pageButton} ${page === currentPage ? s.active : ''}`}
                    onClick={() => onPageChange(page)}
                >
                    {page + 1}
                </button>
            ))}

            <button
                type="button"
                className={s.actionButton}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages - 1}
            >
                <ChevronRight size={16} />
            </button>
        </nav>
    )
}