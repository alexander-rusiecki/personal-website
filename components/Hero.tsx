import Link from 'next/link';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { PageInfo } from '../typings';

type Props = {
  pageInfo: PageInfo;
};

// TODO: can Sanity handle this?
const Hero = ({ pageInfo }: Props) => {
  const [text] = useTypewriter({
    words: [
      'HTML',
      'CSS',
      'Sass',
      'Tailwind CSS',
      'JavaScript',
      'TypeScript',
      'Node.js',
      'React.js',
      'Next.js',
      'Angular',
      'MongoDB',
      'Mongoose',
      'MySQL',
      'Prisma ORM',
      'Sanity.IO',
      'Socket.IO',
      'Git',
      'Figma',
      'Agile workflow',
      'Web Accessibility',
    ],
    loop: true,
    delaySpeed: 1000,
  });
  return (
    <section
      id="hero"
      className="h-screen flex flex-col items-center justify-center snap-start"
    >
      <h1 className="text-4xl mb-4 md:text-5xl lg:text-6xl">
        {pageInfo?.name}
      </h1>
      <article className="font-extralight px-18">
        <p className="md:text-xl lg:text-2xl">{pageInfo?.presentation}</p>
        <p className="md:text-xl lg:text-2xl">Based in {pageInfo?.location}</p>
      </article>
      <article className="italic my-16">
        <h2 className="md:text-xl lg:text-2xl">
          <span>{text}</span>
          <Cursor cursorColor="red" />
        </h2>
      </article>
      <article>
        <Link href="#about">
          <button className="my-links">About</button>
        </Link>
        <Link href="#experience">
          <button className="my-links">Experience</button>
        </Link>
        <Link href="#skills">
          <button className="my-links">Skills</button>
        </Link>
        <Link href="#contact">
          <button className="my-links">Contact</button>
        </Link>
      </article>
    </section>
  );
};

export default Hero;
