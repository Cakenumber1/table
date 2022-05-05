import { PostType } from 'types';

// common sort func for every q
export const sortData = (data: PostType[], sType: string, sDir: string) => {
  let a : number;
  let b : number;
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  sDir === 'false' ? [a, b] = [-1, 1] : [a, b] = [1, -1];
  data.sort((d1:any, d2:any) => (d1[sType] > d2[sType] ? a : b));
  return data;
};
