'use client'

import { ButtonBase, Grid, IconButton, TextField } from '@mui/material';
import * as S from './styles';




import { IoIosMenu, IoIosSearch } from "react-icons/io";

import Cart from '../Cart';
import { useProductsStore } from '../../store/productStore';
import { useEffect, useState } from 'react';
import { CategoriesList } from '../CategoriesList';




const Header = () => {
    const [productTerm, setProductTerm] = useState<string>(''); 
  
    const fetchProducsData = useProductsStore((state) => state.fetchProductsData);

   
    




    return (
        <S.Main>
            <S.Container  justifyContent='space-between' alignItems='center' gap={1}>
                <S.Item>
                    <ButtonBase  onClick={() => fetchProducsData({})}>
                        <S.Title> WesCommerce </S.Title>
                    </ButtonBase>
                </S.Item>

                <S.Item xs={12} lg={6} md={6}>
                    <TextField  
                        fullWidth 
                        style={{
                            backgroundColor: 'white',
                            borderRadius: 10,
                        }}
                        size='small'
                        onChange={(e) => setProductTerm(e.target.value)}
                        variant='outlined' 
                        placeholder='Busque aqui seu produto'
                        InputProps={{
                            endAdornment:(
                                <IconButton onClick={() => fetchProducsData({
                                    title: productTerm,
                                })}>
                                    <IoIosSearch size={25} color='blue'/>
                                </IconButton>
                            )
                        }}
                    />
                </S.Item>

                <S.Item>
                    <Cart/>
                </S.Item>

            </S.Container>
        </S.Main>
    )
}


export default Header;
