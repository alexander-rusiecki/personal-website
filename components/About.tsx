import { motion } from 'framer-motion';
import { PageInfo } from '@/typings';

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <section
      id="about"
      className="h-screen flex flex-col items-center justify-center snap-center"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="mb-8 text-2xl tracking-[10px] uppercase md:text-3xl lg:text-4xl"
      >
        About
      </motion.h2>
      <article className="px-8 mx-auto leading-7 md:px-32 md:text-lg lg:text-xl lg:px-72 lg:leading-9">
        <p>{pageInfo?.about}</p>
      </article>
    </section>
  );
};

export default About;
