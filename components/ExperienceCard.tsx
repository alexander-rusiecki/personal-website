import Image from 'next/image';
import { motion } from 'framer-motion';
import { Experience } from '../typings';

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col items-center justify-evenly flex-shrink-0 w-full overflow-hidden snap-center ">
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
          alt={`${experience?.companyName} logo`}
        />
      </motion.div>
      <div className="mb-12 flex flex-col space-evenly">
        <h2 className="text-center">{experience?.companyName}</h2>
        <p>{experience?.jobTitle}</p>
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
