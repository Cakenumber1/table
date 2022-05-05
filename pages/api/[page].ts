// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getData } from 'helpers/getData';
import { sortData } from 'helpers/sortData';
import type { NextApiRequest, NextApiResponse } from 'next';

// pages
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET': {
      let ans = await getData();
      if (ans) {
        ans = sortData(ans, req.query.sType as string, req.query.sDir as string);
        const start = (Number(req.query.page) - 1) * 10;
        ans = ans.slice(start, start + 10);
        return res.status(200).json({ ans });
      }
      break;
    }
    default:
  }
  return res.status(400).end();
}
