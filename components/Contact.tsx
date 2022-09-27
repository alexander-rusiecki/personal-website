import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';

import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

type Props = {};

const Contact = (props: Props) => {
  type FormValues = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = data => {
    window.location.href = `mailto:alexander.rusiecki@gmail.com?subject=${data.subject}&body=My name is ${data.name}. This is my message to you: ${data.message}. My email is ${data.email}.`;
  };
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
      <article className="flex items-center">
        <PhoneIcon className="h-6 w-6 cursor-pointer" />
        <p>+46762156080</p>
      </article>
      <article className="flex items-center">
        <EnvelopeIcon className="h-6 w-6 cursor-pointer" />
        <p>alexander.rusiecki@gmail.com</p>
      </article>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-2 w-fit mx-auto"
      >
        <div className="flex space-x-2">
          <input
            {...register('name')}
            className="my-inputs"
            type="text"
            placeholder="name"
          />
          <input
            {...register('email')}
            className="my-inputs"
            type="email"
            placeholder="email"
          />
        </div>
        <input
          {...register('subject')}
          className="my-inputs"
          type="text"
          placeholder="subject"
        />
        <textarea
          {...register('message')}
          className="my-inputs"
          placeholder="message"
        />
        <button className="py-5 px-10 bg-blue-300 rounded-md">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
