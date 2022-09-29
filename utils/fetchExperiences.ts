import axios from 'axios';
import { Experience } from '../typings';
import { siteUrl } from './siteUrl';

export const fetchExperiences = async (): Promise<Experience[]> => {
  const { data } = await axios.get(`${siteUrl}/api/fetchExperiences`);
  const experiences: Experience[] = data.experiences;
  return experiences;
};
