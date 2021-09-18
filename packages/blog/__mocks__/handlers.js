import { rest } from 'msw'

export const handlers = [
  rest.post('http://google.com/api/login', (req, res, ctx) => {
    const { username, password } = req.body

    return res(
      ctx.json({
        message: 'Sucesso',
      })
    )
  }),
];
