// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getData } from 'helpers/getData';
import type { NextApiRequest, NextApiResponse } from 'next';
import { PostType } from 'types/PostType';

// search
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  switch (req.method) {
    case 'GET': {
      const result: PostType[] = [];
      const ans: PostType[] = await getData();
      if (ans) {
        // eslint-disable-next-line no-restricted-syntax
        for (const post of ans) {
          const t = Object.values(post);
          for (let i = 0; i < t.length; i++) {
            if (String(t[i]).includes(String(req.query.str))) {
              result.push(post);
              break;
            }
          }
        }
        return res.status(200).json({ result });
      }
      break;
    }
    default:
  }
  return res.status(400).end();
}
