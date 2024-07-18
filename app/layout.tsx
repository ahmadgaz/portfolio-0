import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Analytics } from '@vercel/analytics/react';
import './global.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.gaza.li'),
  title: 'Software Developer & UX/UI Designer | Ahmad Gazali',
  description:
    'Software Developer & UX/UI Designer passionate about creating beautiful and functional digital products and web designs. I specialize in front-end web development and design systems. I am currently available for hire and open to new opportunities. Let’s work together to create something amazing!',
  openGraph: {
    images: '/preview-image.png',
  },
  keywords: [
    "web development agency",
    "web developer near me",
    "web development services", 
    "custom web development", 
    "responsive web design", 
    "ui design", 
    "web design company", 
    "web designer near me", 
    "ecommerce website development", 
    "frontend development services", 
    "web development for small businesses", 
    "professional web design", 
    "web design for startups", 
    "website redesign services", 
    "graphic design website", 
    "best ui design", 
    "mobile website design", 
    "user experience design", 
    "creative web solutions", 
    "website optimization services", 
    "digital design services", 
    "minimalist website design"
],
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
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${inter.className} text-body`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
