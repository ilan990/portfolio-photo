import type { Metadata } from 'next';
import { GeistSans, GeistMono } from 'geist/font';
import "./globals.css";

export const metadata: Metadata = {
  title: 'Ilan Assouline | Développeur Web pour Photographes',
  description: 'Développeur web spécialisé dans la création de sites pour photographes professionnels. Des solutions sur mesure qui mettent en valeur votre travail.',
  keywords: ['développeur web', 'site photographe', 'portfolio photo'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className={GeistSans.className}>
        {children}
      </body>
    </html>
  );
}
