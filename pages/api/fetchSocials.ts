import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { Social } from '../../typings';

type Data = {
  socials: Social[];
};

// TODO: check responding with all data
const query = groq`
  *[_type == "social"] {
    _id,
    url
  }
`;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const socials: Social[] = await sanityClient.fetch(query);
  res.status(200).json({ socials });
}
