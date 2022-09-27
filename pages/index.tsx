import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import Contact from '../components/Contact';

const Home: NextPage = () => {
  return (
    <div className="h-screen mx-auto snap-y snap-mandatory overflow-y-scroll overflow-x-hidden max-w-7xl scrollbar-thin scrollbar-track-teal-300/20 scrollbar-thumb-gray-900">
      <Head>
        <title>Alexander Rusiecki</title>
      </Head>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
