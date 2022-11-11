import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';
import { Experience } from '../typings';

export const fetchExperiences = async (): Promise<Experience[]> => {
  const query = groq`
  *[_type == "experience"] | order(startDate desc)
`;
  const experiences: Experience[] = await sanityClient.fetch(query);
  return experiences;
};
