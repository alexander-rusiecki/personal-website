import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';

type Props = {};

const Experience = (props: Props) => {
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
      <article className="w-full  flex space-x-5 overflow-x-scroll  snap-x snap-mandatory scrollbar scrollbar-track-teal-300/20 scrollbar-thumb-gray-900">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </article>

      {/* <article>
        <h2>Ericsson AB</h2>
        <h3>Media management</h3>
        <address>Stockholm, Sweden</address>
        <p>
          <time dateTime="2009">2009</time> -<time dateTime="2020">2020</time>
        </p>
        <hr />
      </article>
      <article>
        <h2>TV4 AB</h2>
        <h3>Media management</h3>
        <address>Stockholm, Sweden</address>
        <p>
          <time dateTime="2006">2006</time> -<time dateTime="2009">2009</time>
        </p>
        <hr />
      </article>
      <article>
        <h2>Self employed</h2>
        <h3>Camera man</h3>
        <address>Stockholm, Sweden</address>
        <p>
          <time dateTime="2003">2003</time> -<time dateTime="2006">2006</time>
        </p>
        <hr />
      </article>
      <article>
        <h2>Various companies</h2>
        <h3>Sales</h3>
        <address>Stockholm, Sweden</address>
        <p>
          <time dateTime="1998">1998</time> -<time dateTime="2003">2003</time>
        </p>
        <hr />
      </article> */}
    </section>
  );
};

export default Experience;
