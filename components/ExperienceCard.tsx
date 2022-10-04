import Image from 'next/image';
import { motion } from 'framer-motion';
import { Experience } from '../typings';

type Props = {
  experience: Experience;
};

const ExperienceCard = ({ experience }: Props) => {
  return (
    <article className="flex flex-col mx-auto items-center justify-evenly flex-shrink-0 w-full overflow-hidden snap-center ">
      <motion.div
        className="w-20 h-20 mb-2 rounded-full relative"
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
        <h2 className="text-center mb-4">{experience?.companyName}</h2>
        <p>{experience?.jobTitle}</p>
        <address className="text-xs mt-2">{experience?.location}</address>
        <p>
          <time dateTime="2006" className="text-xs">
            {experience?.startDate}
          </time>
          -
          <time dateTime="2009" className="text-xs">
            {experience?.endDate}
          </time>
        </p>
      </div>
    </article>
  );
};

export default ExperienceCard;
