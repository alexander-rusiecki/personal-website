import Image from 'next/image';
import { motion } from 'framer-motion';
import Tv4Logo from '../images/tv4-logo.png';

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col items-center justify-evenly rounded-lg  flex-shrink-0 w-screen  snap-center ">
      <motion.div
        className="w-20 h-20 rounded-full relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
      >
        <Image
          src={Tv4Logo}
          layout="fill"
          objectFit="contain"
          priority
          alt="TV4 logo"
        />
      </motion.div>
      <div>
        <h2>TV4 AB</h2>
        <h3>Media management</h3>
        <address>Stockholm, Sweden</address>
        <p>
          <time dateTime="2006">2006</time> -<time dateTime="2009">2009</time>
        </p>
      </div>
    </article>
  );
};

export default ExperienceCard;
