import { motion } from 'framer-motion';
import Skill from './Skill';
import { Skill as MySkill } from '../typings';

type Props = {
  skills: MySkill[];
};
const Skills = ({ skills }: Props) => {
  return (
    <section
      id="skills"
      className="h-screen px-16 flex flex-col items-center justify-center mx-auto snap-center"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="mb-24 text-2xl tracking-[10px] uppercase md:text-3xl lg:text-4xl"
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
        {skills?.map(skill => (
          <Skill key={skill._id} skill={skill} />
        ))}
      </motion.section>
    </section>
  );
};

export default Skills;
