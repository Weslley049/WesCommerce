import { Grid } from '@mui/material';
import styled from 'styled-components'

export const Main = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;

`;

export const Container = styled(Grid).attrs({
    container: true,
})`
    margin: 15px 0;
    width: 90%;
`;

export const Item = styled(Grid).attrs({
    item: true,
})``;
