import { motion } from 'framer-motion';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

type Props = {};

const Header = (props: Props) => {
  return (
    <header
      id="header"
      className="flex items-center justify-between p-4 mx-auto bg-[#0f0111]/90 sticky top-0 z-10 md:px-20 md:py-8 lg:px-32 lg:py-12"
    >
      <motion.section
        initial={{ x: -500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          url="https://github.com/alexander-rusiecki"
          target="_blank"
          fgColor="white"
          bgColor="transparent"
          label="Github"
        />
        <SocialIcon
          url="https://www.linkedin.com/in/alexander-rusiecki-b1428519b/"
          target="_blank"
          fgColor="white"
          bgColor="transparent"
          label="LinkedIn"
        />
      </motion.section>
      <Link href="#contact">
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="flex flex-row items-center"
        >
          <SocialIcon
            network="email"
            fgColor="white"
            bgColor="transparent"
            label="Email"
            className="cursor-pointer"
          />
          <p className="uppercase hidden text-sm cursor-pointer font-thin md:inline-flex">
            Contact me
          </p>
        </motion.section>
      </Link>
    </header>
  );
};

export default Header;
