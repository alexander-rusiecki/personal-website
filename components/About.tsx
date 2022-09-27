import { motion } from 'framer-motion';

type Props = {};

const About = (props: Props) => {
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
