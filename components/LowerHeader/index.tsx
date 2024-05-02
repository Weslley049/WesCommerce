
import { ButtonBase } from '@mui/material';
import * as S from './styles';




import { IoIosMenu } from "react-icons/io";
import { useCategoriesStore } from '../../store/categoriesStore';
import { useEffect } from 'react';
import { useProductsStore } from '../../store/productStore';
import { CategoriesList } from '../CategoriesList';



const LowerHeader = () => {
    const [categories, fetchCategoriesData] = useCategoriesStore((state) => [state.categories, state.fetchCategoriesData])
    const fetchProductsData = useProductsStore((state) => state.fetchProductsData)


    useEffect(() => {
        fetchCategoriesData();
    },[])
    
    
    
    return (
        <S.Main>
          <S.Body>
            <S.Section>
                    <CategoriesList/>
            </S.Section>
            
             {categories.slice(0,6).map(({name, id}) => (
                <ButtonBase key={id} onClick={() => fetchProductsData({
                    categoryId: String(id)
                })}>
                    <S.Section>
                        <p>  {name} </p>
                    </S.Section>
                </ButtonBase>
             ))}   
          </S.Body>
          
      
   
        </S.Main> 
        
     
    )
}


export default LowerHeader;
 