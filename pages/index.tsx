import type { NextPage } from 'next';
import Head from 'next/head';
import About from '../components/About';
import Experience from '../components/Experience';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Skills from '../components/Skills';

const Home: NextPage = () => {
  return (
    <div className="bg-black font-Nunito text-white h-screen snap-y snap-mandatory overflow-scroll">
      <Head>
        <title>Alexander Rusiecki</title>
      </Head>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Footer />
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
