import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './global.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gaza.li'),
  title: 'Ahmad Gazali | UX/UI Designer & Software Developer',
  description: 'UX/UI Designer & Web Developer',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/favicon-light.svg',
        href: '/favicon-light.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/favicon-dark.svg',
        href: '/favicon-dark.svg',
      },
    ],
  },
  openGraph: {
    images: '/preview-image.png',
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
      <head></head>
      <body className={`${inter.className} text-body`}>{children}</body>
    </html>
  );
}
