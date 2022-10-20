import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Header from '@/components/header';
import Hero from '@/components/hero';
import About from '@/components/about';
import Experiences from '@/components/experiences';
import Skills from '@/components/skills';
import Footer from '@/components/footer';
import Contact from '@/components/contact';
import { PageInfo, Technology, Experience, Skill, Social } from '@/typings';
import { fetchPageInfo } from '@/utils/fetchPageInfo';
import { fetchTechnologies } from '@/utils/fetchTechnologies';
import { fetchExperiences } from '@/utils/fetchExperiences';
import { fetchSkills } from '@/utils/fetchSkills';
import { fetchSocials } from '@/utils/fetchSocials';

type Props = {
  pageInfo: PageInfo;
  technologies: Technology[];
  experiences: Experience[];
  skills: Skill[];
  socials: Social[];
};

const Home: NextPage<Props> = ({
  pageInfo,
  technologies,
  experiences,
  skills,
  socials,
}) => {
  return (
    <div className="h-screen mx-auto snap-y snap-mandatory overflow-y-scroll overflow-x-hidden  scrollbar-thin scrollbar-track-teal-300/20 scrollbar-thumb-gray-900">
      <Head>
        <title>{pageInfo.name}</title>
      </Head>
      <Header socials={socials} />
      <main>
        <Hero pageInfo={pageInfo} technologies={technologies} />
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
  const pageInfo = await fetchPageInfo();
  const technologies = await fetchTechnologies();
  const experiences = await fetchExperiences();
  const skills = await fetchSkills();
  const socials = await fetchSocials();
  return {
    props: {
      pageInfo,
      technologies,
      experiences,
      skills,
      socials,
    },
    revalidate: 3600,
  };
};
