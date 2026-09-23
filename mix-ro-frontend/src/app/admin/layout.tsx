import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "../(public)/globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
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
    <html suppressHydrationWarning={true} className={`${inter.variable} ${playfairDisplay.variable}`}>
      <body>{children}</body>
    </html>
  );
}
