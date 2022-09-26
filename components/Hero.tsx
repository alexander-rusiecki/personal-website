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
    <section className="flex flex-col items-center justify-center my-40 snap-center">
      <h1>Alexander Rusiecki</h1>
      <h2>
        <span>{text}</span>
        <Cursor cursorColor="red" />
      </h2>
    </section>
  );
};

export default Hero;
