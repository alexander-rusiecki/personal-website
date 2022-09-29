import axios from 'axios';
import { Social } from '../typings';
import { SITE_URL } from '../constants/siteUrl';

export const fetchSocials = async (): Promise<Social[]> => {
  const { data } = await axios.get(`${SITE_URL}/api/fetchSocials`);
  const socials: Social[] = data.socials;
  return socials;
};
