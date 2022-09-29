import axios from 'axios';
import { Social } from '../typings';
import { siteUrl } from './siteUrl';

export const fetchSocials = async (): Promise<Social[]> => {
  const { data } = await axios.get(`${siteUrl}/api/fetchSocials`);
  const socials: Social[] = data.socials;
  return socials;
};
