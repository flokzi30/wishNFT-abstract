import type { Metadata } from 'next';
import { DynaPuff } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { Analytics } from '@vercel/analytics/react';
import PlausibleProvider from 'next-plausible';
import { Toaster } from 'sonner';
import { Providers } from '@/providers/providers';
import { WishNFTProvider } from '@/providers/WishNFTProvider';

// DynaPuff fontunu yükle
const dynaPuff = DynaPuff({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'WishMint - Turn Your Dreams into NFTs',
  description: 'Turn your dreams into unique NFTs on the Abstract blockchain.',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain="wishmint.xyz" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta name="color-scheme" content="light" />
      </head>
      <body
        className={`${dynaPuff.className} antialiased bg-white text-gray-900`}
      >
        <Providers>
          <WishNFTProvider>
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
            <Analytics />
            <Toaster position="top-center" />
          </WishNFTProvider>
        </Providers>
      </body>
    </html>
  );
}
