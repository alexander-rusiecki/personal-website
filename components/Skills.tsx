import { motion } from 'framer-motion';
import Skill from './Skill';

type Props = {};

const Skills = (props: Props) => {
  return (
    <section
      id="skills"
      className="h-screen flex flex-col items-center justify-center snap-center relative"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute top-36 text-2xl tracking-[10px] uppercase md:mb-6 lg:text-4xl lg:m-0 lg:p-0 lg:mb-10"
      >
        Skills
      </motion.h2>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="grid grid-cols-4 gap-5"
      >
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </motion.section>
    </section>
  );
};

export default Skills;
