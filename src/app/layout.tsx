import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Talkreach Media',
  description:
    'Talkreach Media helps doctors build a credible, consistent digital presence through profile management, strategy and professional video content.',
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${manrope.variable}`}>
        <div id="top" />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
