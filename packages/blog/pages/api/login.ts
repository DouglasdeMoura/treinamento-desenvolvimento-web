// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type LoginBody = {
  username: string,
  password: string,
}

type Data = {
  message: string,
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST')
    res.status(405).end();

  const { username, password } = req.body as LoginBody;
  res.status(401).json({ message: "Usuário autenticado" })
}
