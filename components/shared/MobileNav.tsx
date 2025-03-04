import Link from 'next/link';
import NavLink from './NavLink';

interface MobileNavProps {
  navigation: Array<{ title: string; path: string }>;
  pathname: string;
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileNav({
  navigation,
  pathname,
  isMenuOpen,
  setIsMenuOpen,
}: MobileNavProps) {
  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="p-1.5 sm:p-2 text-gray-600 rounded-lg lg:hidden hover:text-gray-800 hover:bg-gray-100/80 transition-colors relative z-50"
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        <div className="w-5 h-5 sm:w-6 sm:h-6 flex flex-col justify-center items-center">
          <span
            className={`bg-current transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}
          />
          <span
            className={`bg-current transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
          />
          <span
            className={`bg-current transition-all duration-300 ease-out block h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}
          />
        </div>
      </button>

      {/* Mobile Navigation Menu */}
      <div
        className={`fixed inset-x-0 top-[3.5rem] sm:top-16 md:top-20 h-[calc(100vh-3.5rem)] sm:h-[calc(100vh-4rem)] md:h-[calc(100vh-5rem)] bg-white lg:hidden transition-transform duration-200 ease-out will-change-transform transform z-40 ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="h-full p-4 pb-8 overflow-y-auto">
          <div className="flex flex-col gap-y-3 sm:gap-y-4">
            {navigation.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium rounded-xl transition-all duration-200
                  ${
                    pathname === item.path
                      ? 'text-gray-800 bg-gray-100'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50 active:bg-gray-100'
                  }`}
              >
                {item.title}
              </Link>
            ))}
            <NavLink
              href="/mint-a-wish"
              className="mt-3 sm:mt-4 px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white bg-gray-800 rounded-xl hover:bg-gray-700 active:bg-gray-900 transition-all duration-200 text-center"
            >
              Mint My Wish
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
