import { ReactNode, forwardRef, useImperativeHandle, useMemo, useRef, useState } from "react";

import * as S from './styles'
import { ButtonBase, Menu, MenuItem } from "@mui/material";
import { useCartStore } from "../../store/cartStore";
import { Handler, VerticalMenu } from "../Core/VerticalMenu";
import { FiShoppingCart } from "react-icons/fi";
import { groupByProducts } from "../../utils/groupProducts";
import { ProductView } from "../ProductView";




const Cart = () => {
    const CartRef = useRef<Handler>({} as Handler)

    const [products, totalCost,  remove] = useCartStore((state) => [state.products, state.totalCost, state.remove]);

 

    return (
        <S.Main>
               <VerticalMenu 
                    ref={CartRef} 
                    icon={
                            <ButtonBase onClick={() => CartRef.current.handleOpen()}>
                                <FiShoppingCart style={{
                                    position: 'relative'
                                }} size={30} color='white'/>
                                {!!products.length && (
                                     <S.ProductsAmount>{products.length}</S.ProductsAmount>
                                )}
                               
                            </ButtonBase>
                        }>
                    <S.ContentMain>
                        <S.Container gap={3}>
                            <S.Title> Meu Carrinho </S.Title>
                            
                            
                            {products.length ? (
                                <>
                                    {products.map(({product, quantity}, index) => (
                                        <S.Item xs={12}>
                                            <ProductView 
                                            key={index}
                                            description={product.description}
                                            price={product.price}
                                            image={product.images[0]}
                                            onRemove={() => remove(index)}
                                            title={product.title}
                                            quantity={quantity}
                                            />
                                        
                                        </S.Item>
                                    ))}

                                    <S.Item container xs={12} justifyContent='space-between'>
                                        <p> {products.length} itens no carrinho </p>
                                        <p> Valor total: {totalCost.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                                    </S.Item>
                                </>
                            ): (    
                                <S.Item container xs={12}>
                                    <p> Seu Carrinho está vazio </p>
                                </S.Item>      
                            )}
                           
                        </S.Container>


                    </S.ContentMain>
                </VerticalMenu>
        </S.Main>
    )
}

export default Cart; 