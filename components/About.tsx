import { motion } from 'framer-motion';
import { PageInfo } from '../typings';

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  return (
    <section
      id="about"
      className="h-screen flex flex-col items-center justify-center snap-center relative"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute top-36 text-2xl tracking-[10px] uppercase md:mb-6 lg:text-4xl lg:m-0 lg:p-0 lg:mb-10"
      >
        About
      </motion.h2>
      <article className="px-8 mt-16 mx-auto leading-7 md:px-32 md:text-lg lg:text-xl lg:px-64 lg:leading-9">
        <p>{pageInfo?.about}</p>
      </article>
    </section>
  );
};

export default About;
