import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import linkedinImg from '../../public/images/links/linkedin.svg';
import githubImg from '../../public/images/links/github.svg';
import resumeImg from '../../public/images/links/represent-io.svg';

const nav = [
  { href: '/', label: 'Home', key: 'home' },
  { href: '/projects', label: 'Projects', key: 'projects' },
  { href: '/about', label: 'About', key: 'about' },
];

const links = [
  {
    href: 'https://github.com/brygrill',
    label: 'Github',
    key: 'github',
    src: githubImg,
  },
  {
    href: 'https://www.linkedin.com/in/bryangrill',
    label: 'LinkedIn',
    key: 'linkedin',
    src: linkedinImg,
  },
  {
    href: 'https://represent.io/bryangrill.pdf',
    label: 'Resume',
    key: 'resume',
    src: resumeImg,
  },
];

const NavMenu = () => {
  const { route } = useRouter();
  return (
    <nav>
      <ul className="flex">
        {nav.map(({ href, label, key }) => (
          <li key={key} className="mr-4 md:mr-8">
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

const ExternalLinks = () => (
  <div>
    {links.map(({ href, label, key, src }) => (
      <a
        href={href}
        key={key}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-3 md:ml-4"
      >
        <Image src={src} alt={label} height={32} width={32} />
      </a>
    ))}
  </div>
);

/** Render `header` and `nav` elements across app */
export const Header = () => (
  <header className="flex justify-between items-center p-2 md:p-4">
    <NavMenu />
    <ExternalLinks />
  </header>
);
