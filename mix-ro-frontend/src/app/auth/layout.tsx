import type { Metadata } from "next";
import { Instrument_Sans, Spectral } from "next/font/google";
import "../(public)/globals.css";
import ToastProvider from "@/src/shared/_components/feedback/ToastProvider";

const fontBody = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const displayFont = Spectral({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
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
    <html suppressHydrationWarning={true} className={`${fontBody.variable} ${displayFont.variable}`}>
      <body>
        {children}
        <ToastProvider />
      </body>
    </html>
  );
}
