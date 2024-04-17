import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';

import Navbar from './navbar';
import './global.css';

export const metadata: Metadata = {
  title: 'Ahmad | Freelance Web Developer',
  description: 'Freelance UX/UI Designer and Web Developer',
  openGraph: {
    type: 'website',
    // images
  },
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['900', '800', '700', '600', '500', '400', '300'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} text-body`}>
        <Navbar />
        <main className="relative pt-[75px]">{children}</main>
        <Script src="/profile-pic-ascii.js" />
      </body>
    </html>
  );
}