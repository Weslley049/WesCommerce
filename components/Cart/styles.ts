import { Grid } from '@mui/material';
import styled from 'styled-components';


export const Main = styled.div``;

export const Container = styled(Grid).attrs({
    container: true,
})``;

export const Item = styled(Grid).attrs({
    item: true,
})``;

export const Title = styled.p`
    font-size: 0.9rem;
    font-weight: 700;
    
`;

export const ContentMain = styled.div`
    max-width: 40vw;
    padding: 10px;

    
     @media (max-width: 768px) {
       max-width: 100vw; 
    }

`;

export const ProductsAmount = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 15px;
    width: 15px;
    position: absolute;
    top:0;
    right:-10px;
    background-color: red;
    color: var(--white);
    border-radius: 9999px;
`;