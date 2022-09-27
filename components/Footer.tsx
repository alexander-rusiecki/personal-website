import Link from 'next/link';
import { motion } from 'framer-motion';
import { HomeIcon } from '@heroicons/react/24/solid';

const Footer = () => {
  return (
    <footer
      id="footer"
      className="flex items-center justify-center p-2 bg-[#0f0111]/90 sticky bottom-0 md:p-4 lg:p-6"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 3 }}
        viewport={{ once: true }}
      >
        <Link href="#hero">
          <HomeIcon className="h-6 w-6 cursor-pointer" />
        </Link>
      </motion.div>
    </footer>
  );
};

export default Footer;
