import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../prisma/client'

type postProps = {
  title: string
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const post: postProps = JSON.parse(req.body)
    console.log(post)
    if (req.method === 'POST') {
      try {
        const data = await prisma.post.create({ data: { title: post.title } })
        res.status(200).json(data)
      } catch (error) {
        return res.status(500).json({ message: 'Error creating the post' })
      }
    }
  } catch (error) {
    return res.status(500).json(error)
  }
}

export default handler
