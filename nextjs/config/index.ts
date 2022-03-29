import linkedinImg from '../public/images/links/linkedin.svg';
import githubImg from '../public/images/links/github.svg';

export const nav = [
  { href: '/', label: 'Home', key: 'home', display: true },
  { href: '/projects', label: 'Projects', key: 'projects' },
  { href: '/about', label: 'About', key: 'about' },
  { href: '/resume', label: 'Resume', key: 'resume' },
].filter((item) => item.display);

export const links = [
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
];
