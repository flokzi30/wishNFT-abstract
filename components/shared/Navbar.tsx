'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const navigation = [
  { title: 'Homepage', path: '/' },
  { title: 'Wish Board', path: '/wishes' },
  // { title: 'Collection', path: '/memorable-nfts' },
  // { title: 'Roadmap', path: '/roadmap' },
  // { title: 'How It Works', path: '/how-it-works' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname, searchParams]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 will-change-transform
        ${isScrolled 
          ? 'bg-white/90 backdrop-blur-sm shadow-sm' 
          : 'bg-white/80 backdrop-blur-sm border-b border-grey-100'
        }`}
    >
      <nav className="custom-screen px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16 md:h-20">
          <Link 
            href="/" 
            className="flex items-center gap-2 sm:gap-3 hover:opacity-75 transition-opacity relative z-50"
          >
            <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gradient-to-r from-primary-dark to-primary-main rounded-lg flex items-center justify-center text-white font-bold text-base sm:text-xl">
              W
            </div>
            <span className="font-bold text-base sm:text-lg text-grey-900">WishMint</span>
          </Link>

          <DesktopNav navigation={navigation} pathname={pathname} />
          <MobileNav 
            navigation={navigation} 
            pathname={pathname} 
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
