import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alexander Rusiecki</title>
      </Head>
      <Header />
      <Hero />
      <footer></footer>
    </div>
  );
};

export default Home;
