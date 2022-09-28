import axios from 'axios';
import { Skill } from '../typings';

export const fetchSkills = async (): Promise<Skill[]> => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/fetchSkills`
  );
  const skills: Skill[] = data.skills;
  return skills;
};
