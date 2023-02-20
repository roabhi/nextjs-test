// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma/client'

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    try {
      //get prisma to fetch the post

      const data = await prisma.post.findMany()
      return res.status(200).json(data)
    } catch (error) {
      return res.status(500).json(error)
    }
  }

  res.status(200).json({ name: 'John Doe' })
}

export default handler
