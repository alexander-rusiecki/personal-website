import axios from 'axios';
import { Skill } from '../typings';
import { SITE_URL } from '../constants/siteUrl';
import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';

export const fetchSkills = async (): Promise<Skill[]> => {
  // const { data } = await axios.get(`${SITE_URL}/api/fetchSkills`);
  // const skills: Skill[] = data.skills;
  // return skills;
  const query = groq`
  *[_type == "skill"]
`;

  // export default async function handler(
  //   req: NextApiRequest,
  //   res: NextApiResponse<Data>
  // ) {
  const skills: Skill[] = await sanityClient.fetch(query);
  return skills;
  // res.status(200).json({ skills });
  // }
};
