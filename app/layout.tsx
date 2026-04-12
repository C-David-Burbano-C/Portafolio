import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Carlos Burbano",
  description: "Portafolio Carlos Burbano",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth">
      <body className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-800 transition-[background-color,color,border-color,box-shadow] duration-500 ease-out dark:bg-slate-950 dark:text-slate-100">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
