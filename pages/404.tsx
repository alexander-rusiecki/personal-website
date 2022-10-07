import type { NextPage } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { HomeIcon } from '@heroicons/react/24/solid';

const Custom404: NextPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center   scrollbar-thin scrollbar-track-teal-300/20 scrollbar-thumb-gray-900">
      <Head>
        <title>404: Not found</title>
      </Head>
      <main className="flex items-center gap-4">
        <h1 className="hidden md:inline-block md:text-xl">404 </h1>
        <span className="hidden md:inline-block md:text-xl">-</span>
        <p className="font-thin">This page could not be found</p>
      </main>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <Link href="/">
          <a>
            <HomeIcon className="h-6 w-6 mt-10 cursor-pointer text-white" />
          </a>
        </Link>
      </motion.div>
    </div>
  );
};

export default Custom404;
