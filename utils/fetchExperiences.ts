import axios from 'axios';
import { Experience } from '../typings';

export const fetchExperiences = async (): Promise<Experience[]> => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/fetchExperiences`
  );
  const experiences: Experience[] = data.experiences;
  return experiences;
};
