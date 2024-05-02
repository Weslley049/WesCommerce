// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

export type ProductCategory = {
  id:number,
  name:string,
  image: string,
  creationAt: string
  updatedAt: string
}


export default async function CategoriesHandler(
  req: NextApiRequest,
  res: NextApiResponse<ProductCategory[]>
) {
  const response = await fetch('https://api.escuelajs.co/api/v1/categories').then(response => response.json())


  res.status(200).json(response)
}
