import axios from 'axios';
import { Skill } from '../typings';
import { SITE_URL } from '../constants/siteUrl';

export const fetchSkills = async (): Promise<Skill[]> => {
  const { data } = await axios.get(`${SITE_URL}/api/fetchSkills`);
  const skills: Skill[] = data.skills;
  return skills;
};
