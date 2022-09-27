import { motion } from 'framer-motion';

type Props = {};

const About = (props: Props) => {
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
        className="text-2xl mb-4 tracking-[6px] uppercase lg:text-4xl"
      >
        About
      </motion.h2>
      <article className="px-8 mx-auto leading-7 md:px-24 lg:px-80 lg:text-xl">
        <p>
          Born and raised in the capital of Sweden, Stockholm. I have a
          background in broadcasting and media management. After 14 years in the
          media industry it´s time to move on to bigger and greater things! At
          the moment I am studying frontend web development with JavaScript and
          Typescript as my main focus. Also learning about the latest
          technologies and frameworks such as React, Angular and Nodejs. Check
          out my Github profile for my projects 🤙🏼
        </p>
      </article>
    </section>
  );
};

export default About;
