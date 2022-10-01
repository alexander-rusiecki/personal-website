import { motion } from 'framer-motion';
import { useForm, SubmitHandler } from 'react-hook-form';
import { PageInfo } from '../typings';
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

type Props = {
  pageInfo: PageInfo;
};

const Contact = ({ pageInfo }: Props) => {
  type FormValues = {
    name: string;
    email: string;
    subject: string;
    message: string;
  };
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = data => {
    console.log(data);
  };
  return (
    <section
      id="contact"
      className="h-screen px-2 flex flex-col items-center justify-center mx-auto snap-center"
    >
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        viewport={{ once: true }}
        className="mt-6 mb-8 text-2xl tracking-[10px] uppercase md:text-3xl lg:text-4xl"
      >
        Contact
      </motion.h2>
      <article className="flex items-center font-extralight">
        <PhoneIcon className="h-4 w-4 cursor-pointer" />
        <p className="px-2">{pageInfo?.phoneNumber}</p>
      </article>
      <article className="flex items-center font-extralight mb-8">
        <EnvelopeIcon className="h-4 w-4 cursor-pointer" />
        <p className="px-2 ">{pageInfo?.email}</p>
      </article>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col w-full px-2 mx-auto md:w-fit"
      >
        <div className="flex flex-col md:flex-row md:space-x-2">
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
        <button className="py-5 px-10 bg-teal-600 mt-2	 rounded-md">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
