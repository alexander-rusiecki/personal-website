import { sanityClient } from '../sanity';
import { groq } from 'next-sanity';
import { Social } from '../typings';

export const fetchSocials = async (): Promise<Social[]> => {
  const query = groq`
  *[_type == "social"]
`;
  const socials: Social[] = await sanityClient.fetch(query);
  return socials;
};
