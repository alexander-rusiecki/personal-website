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
    <section className="flex flex-col items-center justify-center h-screen px-14 snap-center">
      <h1 className="text-3xl mb-4">Alexander Rusiecki</h1>
      <div className="font-extralight">
        <p>Hi! I´m a web developer in the making.</p>
        <p>Based in Stockholm, Sweden</p>
      </div>
      <h3 className="italic mt-16">
        <span>{text}</span>
        <Cursor cursorColor="red" />
      </h3>
    </section>
  );
};

export default Hero;
