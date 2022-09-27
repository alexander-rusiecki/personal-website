import Link from 'next/link';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

type Props = {};

const Hero = (props: Props) => {
  const [text] = useTypewriter({
    words: [
      'HTML',
      'CSS',
      'Sass',
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
        Alexander Rusiecki
      </h1>
      <article className="font-extralight px-18">
        <p className="md:text-xl lg:text-2xl">
          Hi! I´m a web developer in the making
        </p>
        <p className="md:text-xl lg:text-2xl">Based in Stockholm, Sweden</p>
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
