import Link from 'next/link';
import { useTypewriter, Cursor } from 'react-simple-typewriter';

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
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
      className="flex flex-col items-center justify-center h-screen snap-start"
    >
      <h1 className="text-3xl mb-4">Alexander Rusiecki</h1>
      <article className="font-extralight px-14">
        <p>Hi! I´m a web developer in the making.</p>
        <p>Based in Stockholm, Sweden</p>
      </article>
      <article className="italic mt-16 mb-8">
        <h2>
          <span>{text}</span>
          <Cursor cursorColor="red" />
        </h2>
      </article>
      <article>
        <Link href="#about">
          <button className="my-btn">About me</button>
        </Link>
        <Link href="#experience">
          <button className="my-btn">Experience</button>
        </Link>
        <Link href="#skills">
          <button className="my-btn">Skills</button>
        </Link>
        <Link href="#contact">
          <button className="my-btn">Contact me</button>
        </Link>
      </article>
    </section>
  );
};

export default Hero;
