import Image from "next/image";
import { links } from "../config";

const ExternalLinks = () => (
  <div className="flex items-center">
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
  <header className="flex justify-end items-center p-2 md:p-4">
    <ExternalLinks />
  </header>
);
