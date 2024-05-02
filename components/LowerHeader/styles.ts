import { Grid } from "@mui/material";
import styled from "styled-components";


export const Main = styled.div`
    width: 100%;
    display: flex;
    padding: 10px 0;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 4px 4px -2px rgba(0, 0, 0, 0.1);
    background-color: var(--gray-50);

     @media (max-width: 768px) {
        display: none;  
    }
`;

export const Body = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 90%;
`;

export const Section = styled.div`
    display: flex;
    margin: 0 20px;

    align-items: center;
`;





