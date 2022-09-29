import axios from 'axios';
import { Experience } from '../typings';
import { SITE_URL } from '../constants/siteUrl';
import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';

export const fetchExperiences = async (): Promise<Experience[]> => {
  // const { data } = await axios.get(`${SITE_URL}/api/fetchExperiences`);
  // const experiences: Experience[] = data.experiences;
  // return experiences;
  const query = groq`
  *[_type == "experience"]
`;
  const experiences: Experience[] = await sanityClient.fetch(query);
  return experiences;
};
