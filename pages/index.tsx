import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <div className="bg-black text-white h-screen snap-y snap-mandatory overflow-scroll">
      <Head>
        <title>Alexander Rusiecki</title>
      </Head>
      <Header />
      <main>
        <Hero />
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
