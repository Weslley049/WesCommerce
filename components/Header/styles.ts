import { Grid } from "@mui/material";
import styled from "styled-components";


export const Main = styled.div`
    width: 100%;
    padding: 2%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--blue);
`;

export const Container = styled(Grid).attrs({
    container: true,
})`
    width: 90%;
`;

export const Item = styled(Grid).attrs({
    item: true,
})``;


export const Title = styled.p`
    color: white;
    font-size: 1.6rem;
`

