import type { GetStaticProps } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Experiences from '../components/Experiences';
import Skills from '../components/Skills';
import Footer from '../components/Footer';
import Contact from '../components/Contact';
import { PageInfo, Experience, Skill, Social } from '../typings';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchExperiences } from '../utils/fetchExperiences';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchSocials } from '../utils/fetchSocials';

type Props = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  socials: Social[];
};

const Home = ({ pageInfo, experiences, skills, socials }: Props) => {
  return (
    <div className="h-screen mx-auto snap-y snap-mandatory overflow-y-scroll overflow-x-hidden max-w-7xl scrollbar-thin scrollbar-track-teal-300/20 scrollbar-thumb-gray-900">
      <Head>
        <title>{pageInfo.name}</title>
      </Head>
      <Header socials={socials} />
      <main>
        <Hero pageInfo={pageInfo} />
        <About pageInfo={pageInfo} />
        <Experiences experiences={experiences} />
        <Skills skills={skills} />
        <Contact pageInfo={pageInfo} />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocials();
  return {
    props: {
      pageInfo,
      experiences,
      skills,
      socials,
    },
    revalidate: 1,
  };
};
