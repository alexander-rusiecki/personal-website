import axios from 'axios';
import { Social } from '../typings';
import { SITE_URL } from '../constants/siteUrl';
import { sanityClient } from '../sanity';
import { groq } from 'next-sanity';

export const fetchSocials = async (): Promise<Social[]> => {
  // const { data } = await axios.get(`${SITE_URL}/api/fetchSocials`);
  // const socials: Social[] = data.socials;
  // return socials;
  const query = groq`
  *[_type == "social"]
`;

  // export default async function handler(
  //   req: NextApiRequest,
  //   res: NextApiResponse<Data>
  // ) {
  const socials: Social[] = await sanityClient.fetch(query);
  return socials;
  //   res.status(200).json({ socials });
  // }
};
