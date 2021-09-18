import { rest } from 'msw'

export const handlers = [
  rest.post('http://localhost:3000/api/login', (req, res, ctx) => {
    const { username, password } = req.body

    return res(
      ctx.json({
        message: 'Sucesso',
      })
    )
  }),
];
