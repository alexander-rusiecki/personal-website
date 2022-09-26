import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {};

const Header = (props: Props) => {
  return (
    <header
      id="header"
      className="h-[10vh] flex items-center justify-between p-6 mx-auto bg-black/90 sticky top-0 max-w-7xl z-10  md:px-20 lg:px-32 xl:items-center"
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
        />
        <SocialIcon
          url="https://www.linkedin.com/in/alexander-rusiecki-b1428519b/"
          target="_blank"
          fgColor="white"
          bgColor="transparent"
        />
      </motion.section>
      <motion.section
        initial={{ x: 500, opacity: 0, scale: 0.5 }}
        animate={{ x: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="flex flex-row items-center"
      >
        <SocialIcon
          className="cursor-pointer"
          network="email"
          fgColor="white"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm cursor-pointer">
          Contact me
        </p>
      </motion.section>
    </header>
  );
};

export default Header;
