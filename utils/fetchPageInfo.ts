import axios from 'axios';
import { PageInfo } from '../typings';
import { SITE_URL } from '../constants/siteUrl';
import { groq } from 'next-sanity';
import { sanityClient } from '../sanity';

export const fetchPageInfo = async (): Promise<PageInfo> => {
  // const { data } = await axios.get(`${SITE_URL}/api/fetchPageInfo`);
  // const pageInfo: PageInfo = data.pageInfo;
  // return pageInfo;
  const query = groq`
  *[_type == "pageInfo"][0]
`;

  // export default async function handler(
  //   req: NextApiRequest,
  //   res: NextApiResponse<Data>
  // ) {
  const pageInfo: PageInfo = await sanityClient.fetch(query);
  return pageInfo;
  // res.status(200).json({ pageInfo });
  // }
};
