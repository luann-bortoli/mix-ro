import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "../(public)/globals.css"
import AdminSidebar from "@/src/shared/_components/layout/admin-sidebar/AdminSidebar";
import AdminHeader from "@/src/shared/_components/layout/admin-header/AdminHeader";

import s from './layout.module.css'

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Mix Rô | Cookies e Doceria",
    template: "Mix Rô | %s"
  },
  description:
    "Doces, bolos e delícias artesanais da Cookies e Doceria Mix Rô.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html suppressHydrationWarning={true} className={`${inter.variable} ${lora.variable}`}>
      <body>

        <AdminSidebar />

        <AdminHeader />

        <div className={s.content}>
          {children}
        </div>
      </body>
    </html>
  );
}
