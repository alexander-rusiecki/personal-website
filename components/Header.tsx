import Link from 'next/link';
import { motion } from 'framer-motion';
import { SocialIcon } from 'react-social-icons';
import { Social } from '../typings';

type Props = {
  socials: Social[];
};
const Header = ({ socials }: Props) => {
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
        {socials?.map(social => (
          <div key={social._id}>
            <SocialIcon
              url={social.url}
              target="_blank"
              fgColor="white"
              bgColor="transparent"
              label="Github"
            />
          </div>
        ))}
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
