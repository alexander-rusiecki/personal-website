import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '../typings';

type Props = {
  experiences: Experience[];
};
const Experiences = ({ experiences }: Props) => {
  return (
    <section
      id="experience"
      className="h-screen flex flex-col items-center justify-center text-left  mx-auto relative overflow-hidden snap-center md:flex-row"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute top-36 text-2xl tracking-[10px] uppercase md:mb-6 lg:text-4xl lg:m-0 lg:p-0 lg:mb-10"
      >
        experience
      </motion.h2>
      <article className="w-full  flex space-x-5 overflow-x-scroll  snap-x snap-mandatory  scrollbar-track-teal-300/20 scrollbar-thin scrollbar-thumb-gray-900">
        {experiences?.map(experience => (
          <ExperienceCard key={experience._id} experience={experience} />
        ))}
      </article>
    </section>
  );
};

export default Experiences;
