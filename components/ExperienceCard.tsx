import Image from 'next/image';
import Tv4Logo from '../images/tv4-logo.png';

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="relative w-8 rounded-full">
      <Image
        src={Tv4Logo}
        layout="fill"
        objectFit="contain"
        priority
        alt="TV4 logo"
      />
      <h2>TV4 AB</h2>
      <h3>Media management</h3>
      <address>Stockholm, Sweden</address>
      <p>
        <time dateTime="2006">2006</time> -<time dateTime="2009">2009</time>
      </p>
    </article>
  );
};

export default ExperienceCard;
