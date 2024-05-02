// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { ProductCategory } from './categories'



export type Data = {
      id:number,
      title: string,
      price: number,
      description:string,
      images: string[],
      creationAt: string
      updatedAt: string
      category: ProductCategory
}

export default async function productsHandler(
req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  const response = await fetch('https://api.escuelajs.co/api/v1/products').then(response => response.json())


  res.status(200).json(response)
}
