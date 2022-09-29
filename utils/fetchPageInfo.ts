import axios from 'axios';
import { PageInfo } from '../typings';
import { siteUrl } from './siteUrl';

export const fetchPageInfo = async (): Promise<PageInfo> => {
  const { data } = await axios.get(`${siteUrl}/api/fetchPageInfo`);
  const pageInfo: PageInfo = data.pageInfo;
  return pageInfo;
};
