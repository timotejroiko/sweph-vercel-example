import type { VercelRequest, VercelResponse } from '@vercel/node'
import { readdirSync } from 'node:fs';
import { calc, set_ephe_path, version } from 'sweph';

set_ephe_path("./api/ephe");

export default function handler(req: VercelRequest, res: VercelResponse) {
  const { name = 'World' } = req.query
  return res.json({
    message: `Hello ${name}! ${version()}`,
    test: calc(2435645, 0, 2),
    files: readdirSync("./api")
  })
}
