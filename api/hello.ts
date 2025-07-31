import type { VercelRequest, VercelResponse } from '@vercel/node'
import { calc, set_ephe_path, version } from 'sweph';

set_ephe_path("./ephe");

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { name = 'World' } = req.query
  return res.json({
    message: `Hello ${name}!`,
    swephVersion: version(),
    swephCalc: calc(2435645, 0, 2)
  })
}
