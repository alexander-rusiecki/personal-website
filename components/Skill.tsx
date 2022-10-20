import Image from 'next/image';
import { urlFor } from '@/sanity';
import { Skill } from '@/typings';

type Props = {
  skill: Skill;
};

const Skill = ({ skill }: Props) => {
  return (
    <article className="w-10 h-10 rounded-full relative md:w-10 md:h-10 lg:w-12 lg:h-12">
      <Image
        src={urlFor(skill.skillLogo).url()!}
        layout="fill"
        objectFit="contain"
        priority
        alt="skill logo"
      />
    </article>
  );
};

export default Skill;
