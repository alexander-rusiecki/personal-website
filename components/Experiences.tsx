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
      className="h-screen px-16 flex flex-col items-center justify-center mx-auto overflow-hidden snap-center md:px-56 lg:px-80"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="mb-24 text-2xl tracking-[10px] uppercase md:text-3xl lg:text-4xl"
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
