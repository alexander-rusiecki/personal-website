import { motion } from 'framer-motion';

type Props = {};

const Experience = (props: Props) => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center pt-48 h-screen snap-center"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="text-2xl mb-4 tracking-[6px] uppercase"
      >
        Work experience
      </motion.h2>
      <article>
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
      </article>
    </section>
  );
};

export default Experience;
