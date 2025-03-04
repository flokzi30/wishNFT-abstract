import Link from 'next/link';
import NavLink from './NavLink';

interface DesktopNavProps {
  navigation: Array<{ title: string; path: string }>;
  pathname: string;
}

export default function DesktopNav({ navigation, pathname }: DesktopNavProps) {
  return (
    <div className="hidden lg:flex items-center gap-x-6">
      <div className="flex items-center gap-x-1 xl:gap-x-2">
        {navigation.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`px-3 xl:px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200
              ${pathname === item.path 
                ? 'text-grey-900 bg-grey-100/80' 
                : 'text-grey-600 hover:text-grey-900 hover:bg-grey-50'
              }`}
          >
            {item.title}
          </Link>
        ))}
      </div>
      <NavLink
        href="/mint-a-wish"
        className="px-4 xl:px-5 py-2.5 text-sm font-medium text-white bg-primary-main rounded-lg hover:bg-primary-dark active:bg-primary-darker transition-all duration-200"
      >
        Mint My Wish
      </NavLink>
    </div>
  );
} 