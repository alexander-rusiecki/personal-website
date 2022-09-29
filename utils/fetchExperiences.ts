import axios from 'axios';
import { Experience } from '../typings';
import { SITE_URL } from '../constants/siteUrl';

export const fetchExperiences = async (): Promise<Experience[]> => {
  const { data } = await axios.get(`${SITE_URL}/api/fetchExperiences`);
  const experiences: Experience[] = data.experiences;
  return experiences;
};
