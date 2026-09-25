import { Box, GalleryVerticalEnd, Layers, LayoutGrid, NotebookTabs, Tag, Users } from 'lucide-react'
import path from 'path'
import { ModuleCardProps } from './_components/module-card/types'

export const SectionProps = {
    path: 'Dashboard',
    icon: LayoutGrid,
    title: 'Painel Administrativo',
    description: 'Aqui você gerencia todo o conteúdo da sua loja. Escolha um módulo no menu para começar.'
}

export const ModulesCardContent: ModuleCardProps[] = [
    {
        href: '/admin/customers',
        icon: Users,
        title: 'Clientes',
        description:
            'Gerencie os clientes cadastrados e acompanhe suas informações.'
    },
    {
        href: '/admin/products',
        icon: Box,
        title: 'Produtos',
        description:
            'Cadastre, edite e organize os produtos disponíveis na sua loja.'
    },
    {
        href: '/admin/categories',
        icon: Layers,
        title: 'Categorias',
        description:
            'Organize seus produtos em categorias para facilitar a navegação pela loja.'
    },
    {
        href: '/admin/tags',
        icon: Tag,
        title: 'Tags',
        description:
            'Crie e gerencie tags para classificar e organizar seus produtos.'
    },
    {
        href: '/admin/banners',
        icon: GalleryVerticalEnd,
        title: 'Banners',
        description:
            'Gerencie os banners exibidos na página inicial da sua loja.'
    },
    {
        href: '/admin/contact-sources',
        icon: NotebookTabs,
        title: 'Contato',
        description:
            'Gerencie os canais de contato disponíveis para seus clientes.'
    }
]