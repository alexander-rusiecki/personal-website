import axios from 'axios';
import { PageInfo } from '../typings';

export const fetchPageInfo = async (): Promise<PageInfo> => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/fetchPageInfo`
  );
  const pageInfo: PageInfo = data.pageInfo;
  return pageInfo;
};
