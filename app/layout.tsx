import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Payphone Edilizia - Il tuo esperto edile risponde subito',
  description: 'Trova immediatamente l\'esperto giusto: architetti, ingegneri, geometri, impiantisti e professionisti edili pronti a rispondere alla tua chiamata. Paghi solo se risponde.',
  keywords: 'edilizia, architetti, ingegneri, geometri, consulenza edile, emergenze edili',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="it">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
