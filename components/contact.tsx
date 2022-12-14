import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import { motion } from 'framer-motion';
import { PageInfo } from '@/typings';
import { PhoneIcon } from '@heroicons/react/24/outline';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
  pageInfo: PageInfo;
};

const Contact = ({ pageInfo }: Props) => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (
      form.current?.user_name.value &&
      form.current?.user_email.value &&
      form.current?.subject.value &&
      form.current?.message.value
    ) {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
          form.current as HTMLFormElement,
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string
        )
        .then(
          () => {
            form.current?.reset();
            toast.success('Email sent successfully', {
              theme: 'dark',
              style: {
                border: '1px solid #313131',
                borderRadius: '6px',
                backgroundColor: '#0f0111',
              },
            });
          },
          error => {
            console.log(error.text);
          }
        );
    } else {
      toast.error('Please fill out all fields', {
        theme: 'dark',
        style: {
          border: '1px solid #313131',
          borderRadius: '6px',
          backgroundColor: '#0f0111',
        },
      });
    }
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
      <article className="flex items-center font-extralight mb-4">
        <PhoneIcon className="h-4 w-4" />
        <p className="px-2">{pageInfo?.phoneNumber}</p>
      </article>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col w-full px-2 mx-auto md:w-fit"
      >
        <div className="flex flex-col md:flex-row md:gap-2">
          <label htmlFor="user_name" className="sr-only">
            username
          </label>
          <input
            className="my-inputs"
            type="text"
            placeholder="name"
            name="user_name"
            id="user_name"
          />
          <label htmlFor="user_email" className="sr-only">
            email
          </label>
          <input
            className="my-inputs"
            type="email"
            placeholder="email"
            name="user_email"
            id="user_email"
          />
        </div>
        <label htmlFor="subject" className="sr-only">
          subject
        </label>
        <input
          className="my-inputs"
          type="text"
          placeholder="subject"
          name="subject"
          id="subject"
        />
        <label htmlFor="message" className="sr-only">
          message
        </label>
        <textarea
          className="my-inputs"
          placeholder="message"
          name="message"
          id="message"
        />
        <button className="py-5 px-10 bg-teal-600 hover:bg-teal-700 mt-2 rounded-md">
          Submit
        </button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        transition={Zoom}
      />
    </section>
  );
};

export default Contact;
