import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './global.css';

export const metadata: Metadata = {
  title: 'Ahmad Gazali | UX/UI Designer & Software Developer',
  description: 'UX/UI Designer & Web Developer',
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
      <body className={`${inter.className} text-body`}>{children}</body>
    </html>
  );
}
