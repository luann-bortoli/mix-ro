import { SidebarItem } from "./types";
import { LayoutGrid, Users, Box, Layers, Tag, GalleryVerticalEnd, NotebookTabs } from "lucide-react"

export const SidebarData: SidebarItem[] =
    [
        {
            icon: LayoutGrid,
            label: "Dashboard",
            href: "/admin"
        },
        {
            icon: Users,
            label: "Clientes",
            href: "/admin/customers"
        },
        {
            icon: Box,
            label: "Produtos",
            href: "/admin/products"
        },
        {
            icon: Layers,
            label: "Categorias",
            href: "/admin/categories"
        },
        {
            icon: Tag,
            label: "Tags",
            href: "/admin/tags"
        },
        {
            icon: GalleryVerticalEnd,
            label: "Banners",
            href: "/admin/banners"
        },
        {
            icon: NotebookTabs,
            label: "Contato",
            href: "/admin/contact-sources"
        },


    ] 