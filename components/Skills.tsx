import { motion } from 'framer-motion';

type Props = {};

const Skills = (props: Props) => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center pt-24  snap-center"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="text-2xl mb-4 tracking-[6px] uppercase"
      >
        Skills
      </motion.h2>
      <article>
        <h3>Languages</h3>
        <ul>
          <li>HTML</li>
          <li>CSS/SASS</li>
          <li>Javascript</li>
          <li>Typescript</li>
        </ul>
      </article>
      <article>
        <h3>Tools</h3>
        <ul>
          <li>Node</li>
          <li>NPM</li>
          <li>Websockets</li>
        </ul>
      </article>
      <article>
        <h3>Frameworks</h3>
        <ul>
          <li>React</li>
          <li>Next</li>
          <li>Angular</li>
          <li>Wordpress</li>
        </ul>
      </article>
      <article>
        <h3>Additional</h3>
        <ul>
          <li>Agile workflows</li>
          <li>Git</li>
          <li>Figma</li>
          <li>WCAG</li>
        </ul>
      </article>
    </section>
  );
};

export default Skills;
