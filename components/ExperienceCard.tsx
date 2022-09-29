import Image from 'next/image';
import { motion } from 'framer-motion';
import Tv4Logo from '../images/tv4-logo.png';
import { Experience } from '../typings';

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
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
          src={experience?.logoUrl}
          layout="fill"
          objectFit="contain"
          priority
          alt="TV4 logo"
        />
      </motion.div>
      <div>
        <h2>{experience?.companyName}</h2>
        <h3>{experience?.jobTitle}</h3>
        <address>{experience?.location}</address>
        <p>
          <time dateTime="2006">{experience?.startDate}</time> -
          <time dateTime="2009">{experience?.endDate}</time>
        </p>
      </div>
    </article>
  );
};

export default ExperienceCard;
