import axios from 'axios';
import { PageInfo } from '../typings';
import { SITE_URL } from '../constants/siteUrl';

export const fetchPageInfo = async (): Promise<PageInfo> => {
  const { data } = await axios.get(`${SITE_URL}/api/fetchPageInfo`);
  const pageInfo: PageInfo = data.pageInfo;
  return pageInfo;
};
