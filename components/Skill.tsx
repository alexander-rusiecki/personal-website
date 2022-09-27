import Image from 'next/image';
import Tv4Logo from '../images/tv4-logo.png';

type Props = {};

const Skill = (props: Props) => {
  return (
    <article className="w-8 h-8 rounded-full relative">
      <Image
        src={Tv4Logo}
        layout="fill"
        objectFit="contain"
        priority
        alt="TV4 logo"
      />
    </article>
  );
};

export default Skill;
