import { motion } from 'framer-motion';

type Props = {};

const Contact = (props: Props) => {
  return (
    <section
      id="contact"
      className="h-screen flex flex-col items-center justify-center snap-center relative"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="absolute top-36 text-2xl tracking-[10px] uppercase md:mb-6 lg:text-4xl lg:m-0 lg:p-0 lg:mb-10"
      >
        Contact
      </motion.h2>
    </section>
  );
};

export default Contact;
