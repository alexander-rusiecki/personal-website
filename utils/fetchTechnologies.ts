import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';
import { Technology } from '../typings';

export const fetchTechnologies = async (): Promise<Technology[]> => {
  const query = groq`
  *[_type == "technology"]
`;
  const technologies: Technology[] = await sanityClient.fetch(query);
  return technologies;
};
