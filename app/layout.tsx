import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Base modular del portafolio en Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="bg-base text-foreground flex min-h-full flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
