import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Alexander Rusiecki</title>
      </Head>
      <Header />
      <footer></footer>
    </div>
  );
};

export default Home;
