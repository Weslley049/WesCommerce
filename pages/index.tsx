import type { GetStaticProps, NextPage } from 'next'
import productsHandler, { Data } from './api/products';

import * as S from './styles'
import ProductCard from '../components/ProductCard';

import {useQuery} from '@tanstack/react-query';
import { useProductsStore } from '../store/productStore';
import { useEffect } from 'react';




const Home: NextPage = () => {
  const [products, fetchProductsData] = useProductsStore((state) => [state.products, state.fetchProductsData])

  useEffect(() => {
    fetchProductsData({});
  },[])

  return (
    <S.Main> 
      <S.Container spacing={1}> 
        {!!products && products.map((product, index) => (
          <S.Item key={index} xs={12} md={4} lg={3}>
            <ProductCard product={product} />
          </S.Item>
     
        ))}
      </S.Container>
    </S.Main>
   
  )
}

export default Home
