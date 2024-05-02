

import * as S from './styles'
import Image from "next/image";
import { Data } from "../../pages/api/products";

import { BsCartPlusFill } from "react-icons/bs"
import { ButtonBase } from '@mui/material';
import { useCartStore } from '../../store/cartStore';
import { HandlerImageSrc } from '../../utils/imageHandler';
import { useState } from 'react';

export interface ProductCardInterface {
    product: Data  
}

const ProductCard = (props: ProductCardInterface) => { 
    const AddToCart = useCartStore((state) => state.add);
    
    const {product} = props;

    const { description, images,price,title} = product

  
    const [imageError, setImageError] = useState(false);
    


    return (
        <S.Main>
           <S.ImageSection>
                {imageError ? (
                <Image src="/images/nophoto.png"
                width={500}
                height={300}
                alt={title}
                className='image'/>
            ) : (
                <Image 
                src={HandlerImageSrc(images[0])} 
                width={500}
                height={300}
                alt={title}
                className='image'
                onError={() => setImageError(true)}
                />
            )}

           </S.ImageSection>

           <S.InfosSection>
                <p> <strong>{title}  </strong> </p>

                <S.Description> {description}</S.Description>

           </S.InfosSection>

           <S.CartSection>
                <S.Price> {price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</S.Price>
                <ButtonBase onClick={() => AddToCart(product)}>
                    <BsCartPlusFill size={25} color='blue'/>    
                </ButtonBase>
              
           </S.CartSection>
        
        </S.Main>
    )
}


export default ProductCard;