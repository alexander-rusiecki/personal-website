import axios from 'axios';
import { Skill } from '../typings';
import { siteUrl } from './siteUrl';

export const fetchSkills = async (): Promise<Skill[]> => {
  const { data } = await axios.get(`${siteUrl}/api/fetchSkills`);
  const skills: Skill[] = data.skills;
  return skills;
};
