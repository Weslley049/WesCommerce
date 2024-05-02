import Image from 'next/image';
import * as S from './styles';
import { ButtonBase } from '@mui/material';

import { MdDelete } from "react-icons/md";
import { HandlerImageSrc } from '../../utils/imageHandler';
import { useState } from 'react';

export interface ProductViewInterface {
    title: string;
    description: string;
    image: string;
    price: number;
    quantity: number;
    onRemove: () => void;
}

export const ProductView = (props: ProductViewInterface) => {
    const {description,image,onRemove,title, price, quantity} = props;
    
    const [imageError, setImageError] = useState(false);

    return (
        <S.Main>
            <S.ImageSection>
                {imageError ? (
                      <Image 
                      src='/images/nophoto.png'
                      alt={title} 
                      width={100} 
                      height={100}
                      onError={() => setImageError(true)}
                  />
                ) : (
                    <Image 
                        src={HandlerImageSrc(image)} 
                        alt={title}
                        width={100} 
                        height={100}
                        onError={() => setImageError(true)}
                    />
                )}

            </S.ImageSection> 

            <S.InfosSection>
                <p> <strong> {title} (quantidade: {quantity}) </strong></p>

                <S.Description> {description} </S.Description>

          

                <S.CartSection>
                    <S.Price> {price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</S.Price>
                    <ButtonBase onClick={onRemove}>
                        <MdDelete size={25} color='blue'/>    
                    </ButtonBase>
                </S.CartSection> 
            </S.InfosSection>   
              
       
        </S.Main>
    )

}