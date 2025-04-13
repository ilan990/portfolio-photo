import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Marc Leveque | Photographe d\'Architecture',
  description: 'Photographe spécialisé en architecture et design d\'intérieur. Capturer l\'essence des espaces à travers une approche minimaliste.',
  keywords: ['photographe architecture', 'photo immobilier', 'photographe intérieur'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
