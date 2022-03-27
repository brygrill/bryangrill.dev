import Link from 'next/link';
import { useRouter } from 'next/router';

const links = [
  { href: '/', label: 'Home', key: 'home' },
  { href: '/projects', label: 'Projects', key: 'projects' },
  { href: '/about', label: 'About', key: 'about' },
];

const NavMenu = () => {
  const { route } = useRouter();
  return (
    <nav>
      <ul className="flex">
        {links.map(({ href, label, key }) => (
          <li key={key} className="mr-2 md:mr-8">
            <Link href={href}>
              <a
                className={`${
                  route === href
                    ? 'font-semibold text-cyan-400 hover:text-cyan-400'
                    : 'font-normal hover:text-gray-400'
                }`}
              >
                {label}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

/** Render `header` and `nav` elements across app */
export const Header = () => (
  <header className="flex justify-between items-center p-2 md:p-4">
    <NavMenu />
    <div>links here</div>
  </header>
);
