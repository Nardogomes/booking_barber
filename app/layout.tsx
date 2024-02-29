import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Footer from "./_components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Booking Barber",
  description: "Serviços de barbearia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.className} dark`}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
