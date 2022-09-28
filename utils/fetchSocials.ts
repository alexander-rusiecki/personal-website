import axios from 'axios';
import { Social } from '../typings';

export const fetchSocials = async (): Promise<Social[]> => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/fetchSocials`
  );
  const socials: Social[] = data.socials;
  return socials;
};
