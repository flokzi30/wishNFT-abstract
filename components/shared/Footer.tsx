'use client';

import React from 'react';
import Link from 'next/link';

const footerLinks = {
  product: [
    // { name: 'How It Works', href: '/how-it-works' },
    { name: 'Homepage', href: '/' },
    { name: 'Wishes', href: '/wishes' },
    { name: 'Mint a Wish', href: '/mint-a-wish' },

    // { name: 'Collection', href: '/memorable-nfts' },
    // { name: 'Roadmap', href: '/roadmap' },
  ],
  resources: [
    { name: 'Documentation', href: '/docs' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Support', href: '/support' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Legal Disclaimer', href: '/legal-disclaimer' },
  ],
};

const Footer = () => (
  <footer className="bg-gradient-to-b from-white to-[var(--color-primary-lighter)]">
    <div className="custom-screen px-4 sm:px-6 py-10 sm:py-12 md:py-16">
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:gap-12">
        <div className="col-span-2 sm:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-4 sm:mb-6">
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-[var(--color-primary-main)] rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-xl">
              W
            </div>
            <span className="font-bold text-lg sm:text-xl text-[var(--color-grey-900)]">
              WishMint
            </span>
          </Link>
          <p className="text-sm sm:text-base text-[var(--color-grey-600)] max-w-xs">
            Turn your dreams into unique NFTs on the blockchain.
          </p>
        </div>

        <div>
          <h3 className="text-sm sm:text-base font-semibold text-[var(--color-grey-900)] mb-3 sm:mb-4">
            Product
          </h3>
          <ul className="space-y-2 sm:space-y-3">
            {footerLinks.product.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-xs sm:text-sm text-[var(--color-grey-600)] hover:text-[var(--color-primary-main)] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm sm:text-base font-semibold text-[var(--color-grey-900)] mb-3 sm:mb-4">
            Resources
          </h3>
          <ul className="space-y-2 sm:space-y-3">
            {footerLinks.resources.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-xs sm:text-sm text-[var(--color-grey-600)] hover:text-[var(--color-primary-main)] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm sm:text-base font-semibold text-[var(--color-grey-900)] mb-3 sm:mb-4">
            Legal
          </h3>
          <ul className="space-y-2 sm:space-y-3">
            {footerLinks.legal.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-xs sm:text-sm text-[var(--color-grey-600)] hover:text-[var(--color-primary-main)] transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8 border-t border-[var(--color-primary-lighter)]">
        <div className="flex flex-col gap-6 sm:gap-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs sm:text-sm text-[var(--color-grey-600)]">
              <span>© 2025 WishMint.</span>
              <span className="hidden sm:inline">•</span>
              <span>Created by</span>
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="https://x.com/0xmid_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-primary-main)] transition-colors"
                >
                  mid
                </a>
                <span>&</span>
                <a
                  href="https://x.com/BiggieBrik"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--color-primary-main)] transition-colors"
                >
                  BiggieBrik
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <a
                className="flex items-center gap-2 text-xs sm:text-sm text-[var(--color-grey-600)] hover:text-[var(--color-primary-main)] border border-[var(--color-primary-lighter)] rounded-lg px-3 sm:px-4 py-2 transition-all hover:border-[var(--color-primary-light)]"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                Powered by
                <span
                  className="text-base sm:text-lg"
                  role="img"
                  aria-label="Abstract Logo"
                >
                  ✳️
                </span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-grey-400)] hover:text-[var(--color-primary-main)] transition-colors"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-grey-400)] hover:text-[var(--color-primary-main)] transition-colors"
              >
                <svg
                  className="w-5 h-5 sm:w-6 sm:h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.369-.444.85-.608 1.23a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.23A.077.077 0 0 0 8.562 3c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026 13.83 13.83 0 0 0 1.226-1.963.074.074 0 0 0-.041-.104 13.175 13.175 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z" />
                </svg>
              </a>

              <a
                href="https://magiceden.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-grey-400)] hover:text-[var(--color-primary-main)] transition-colors"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  viewBox="0 0 60 60"
                  fill="currentColor"
                >
                  <path d="M30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0ZM30 54.1935C16.6371 54.1935 5.80645 43.3629 5.80645 30C5.80645 16.6371 16.6371 5.80645 30 5.80645C43.3629 5.80645 54.1935 16.6371 54.1935 30C54.1935 43.3629 43.3629 54.1935 30 54.1935Z" />
                  <path d="M41.6129 21.2903C41.6129 24.8919 38.7048 27.7419 35.0323 27.7419C31.3597 27.7419 28.4516 24.8919 28.4516 21.2903C28.4516 17.6887 31.3597 14.8387 35.0323 14.8387C38.7048 14.8387 41.6129 17.6887 41.6129 21.2903ZM24.9677 27.7419C28.6403 27.7419 31.5484 30.5919 31.5484 34.1935C31.5484 37.7952 28.6403 40.6452 24.9677 40.6452C21.2952 40.6452 18.3871 37.7952 18.3871 34.1935C18.3871 30.5919 21.2952 27.7419 24.9677 27.7419Z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4"></div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
