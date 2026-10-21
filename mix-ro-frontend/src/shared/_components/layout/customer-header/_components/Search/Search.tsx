
'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { Search, X, ArrowUpRight } from 'lucide-react'

import s from './Search.module.css'

type SearchResult = {
    id: string
    title: string
    description: string
    type: 'Produto' | 'Categoria' | 'Tag'
    href: string
}

const searchData: SearchResult[] = [
    {
        id: '1',
        title: 'Brigadeiro Gourmet',
        description: 'Docinhos artesanais feitos com chocolate.',
        type: 'Produto',
        href: '/products/brigadeiro-gourmet',
    },
    {
        id: '2',
        title: 'Brownie de Chocolate',
        description: 'Brownie macio com chocolate.',
        type: 'Produto',
        href: '/products/brownie-de-chocolate',
    },
    {
        id: '3',
        title: 'Bolos',
        description: 'Bolos para momentos especiais.',
        type: 'Categoria',
        href: '/categories/bolos',
    },
    {
        id: '4',
        title: 'Doces para presente',
        description: 'Opções para presentear.',
        type: 'Tag',
        href: '/tags/doces-para-presente',
    },
]

export default function CustomerSearch() {
    const [isOpen, setIsOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    const filteredResults = useMemo(() => {
        const query = searchTerm.trim().toLocaleLowerCase('pt-BR')

        if (!query) return []

        return searchData.filter((item) =>
            `${item.title} ${item.description} ${item.type}`
                .toLocaleLowerCase('pt-BR')
                .includes(query),
        )
    }, [searchTerm])

    function closeSearch() {
        setIsOpen(false)
        setSearchTerm('')
    }

    return (
        <div className={s.searchWrapper}>
            <button
                type="button"
                className={s.toggleSearchBar}
                aria-label={isOpen ? 'Fechar pesquisa' : 'Abrir pesquisa'}
                aria-expanded={isOpen}
                onClick={() => {
                    if (isOpen)
                    {
                        closeSearch()
                    } else
                    {
                        setIsOpen(true)
                    }
                }}
            >
                {isOpen ? <X /> : <Search />}
            </button>

            {isOpen && (
                <div className={s.searchBarContainer}>
                    <div className={s.searchContent}>
                        <div className={s.searchBar}>
                            <Search aria-hidden="true" />

                            <input
                                autoFocus
                                type="search"
                                value={searchTerm}
                                onChange={(event) =>
                                    setSearchTerm(event.target.value)
                                }
                                placeholder="Buscar produtos, categorias e tags..."
                                className={s.searchInput}
                                aria-label="Buscar produtos, categorias e tags"
                                aria-controls="search-results"
                            />

                            {searchTerm && (
                                <button
                                    type="button"
                                    className={s.clearSearch}
                                    aria-label="Limpar pesquisa"
                                    onClick={() => setSearchTerm('')}
                                >
                                    <X />
                                </button>
                            )}
                        </div>

                        {searchTerm.trim() && (
                            <div
                                id="search-results"
                                className={s.searchResults}
                            >
                                <div className={s.resultsHeader}>
                                    <span>
                                        {filteredResults.length > 0
                                            ? 'Resultados da pesquisa'
                                            : 'Nenhum resultado encontrado'}
                                    </span>

                                    {filteredResults.length > 0 && (
                                        <span className={s.resultsCount}>
                                            {filteredResults.length}
                                        </span>
                                    )}
                                </div>

                                {filteredResults.length > 0 ? (
                                    <ul className={s.resultsList}>
                                        {filteredResults.map((result) => (
                                            <li key={result.id}>
                                                <Link
                                                    href={result.href}
                                                    className={s.resultItem}
                                                    onClick={closeSearch}
                                                >
                                                    <div className={s.resultInfo}>
                                                        <span className={s.resultType}>
                                                            {result.type}
                                                        </span>

                                                        <span className={s.resultTitle}>
                                                            {result.title}
                                                        </span>

                                                        <span className={s.resultDescription}>
                                                            {result.description}
                                                        </span>
                                                    </div>

                                                    <ArrowUpRight
                                                        className={s.resultArrow}
                                                        aria-hidden="true"
                                                    />
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className={s.emptyResults}>
                                        Tente buscar por outro nome ou termo.
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
