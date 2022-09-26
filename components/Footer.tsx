import { HomeIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer
      id="footer"
      className="h-[5vh] bg-black/90 p-2 flex items-center justify-center sticky bottom-0"
    >
      <Link href="#hero">
        <HomeIcon className="h-6 w-6" />
      </Link>
    </footer>
  );
};

export default Footer;
