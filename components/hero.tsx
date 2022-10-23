import Link from 'next/link';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { PageInfo, Technology } from '@/typings';

type Props = {
  pageInfo: PageInfo;
  technologies: Technology[];
};

const Hero = ({ pageInfo, technologies }: Props) => {
  const [text] = useTypewriter({
    words: technologies?.map((tech: Technology) => tech.technologyName),
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <section
      id="hero"
      className="h-screen flex flex-col items-center justify-center snap-start"
    >
      <h1 className="text-4xl mb-4 md:text-5xl font-extralight lg:text-6xl">
        {pageInfo?.name}
      </h1>
      <article className="font-extralight px-18">
        <p className="pb-1 md:text-xl lg:text-2xl">{pageInfo?.presentation}</p>
        <p className="md:text-xl lg:text-2xl">Based in {pageInfo?.location}</p>
      </article>
      <article className="italic my-16">
        <h2 className="md:text-xl lg:text-2xl">
          <span>{text}</span>
          <Cursor cursorColor="rgba(255, 0, 0, 0.5)" />
        </h2>
      </article>
      <article>
        <Link href="#about">
          <a className="my-links">About</a>
        </Link>
        <Link href="#experience">
          <a className="my-links">Experience</a>
        </Link>
        <Link href="#skills">
          <a className="my-links">Skills</a>
        </Link>
        <Link href="#contact">
          <a className="my-links">Contact</a>
        </Link>
      </article>
    </section>
  );
};

export default Hero;
