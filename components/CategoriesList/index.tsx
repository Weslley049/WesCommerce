
import { useRef } from 'react';
import * as S from './styles';
import { Handler, VerticalMenu } from '../Core/VerticalMenu';
import { ButtonBase, Menu, MenuItem } from '@mui/material';
import { IoIosMenu } from 'react-icons/io';
import { useCategoriesStore } from '../../store/categoriesStore';
import { useProductsStore } from '../../store/productStore';

export const CategoriesList = () => {
    const MenuRef = useRef<Handler>({} as Handler)

    const categories = useCategoriesStore((state) => state.categories);

    
    const fetchProductsData = useProductsStore((state) => state.fetchProductsData);
   
    return (
        <S.Main>
            <VerticalMenu 
                    ref={MenuRef} 
                    icon={
                        <ButtonBase onClick={() => MenuRef.current.handleOpen()}>
                            <IoIosMenu size={25}/> 
                            <p> <strong>Compre por departamento  </strong> </p>
                        </ButtonBase>


                        }>
                        
                        <S.Container gap={1} style={{
                            maxWidth: '20vw'
                        }}>
                            {categories.map(elem => (
                                <S.Item xs={12}>
                                    <MenuItem onClick={() => fetchProductsData({
                                        categoryId: String(elem.id)
                                    })}>
                                        <p> {elem.name} </p>
                                    </MenuItem>
                                </S.Item>
                            ))}
                        </S.Container>
                </VerticalMenu>
        </S.Main>
    )
}