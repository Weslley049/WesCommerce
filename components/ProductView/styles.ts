import styled from 'styled-components';


export const Main = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    gap: 10px;
`;

export const ImageSection = styled.div``;

export const InfosSection = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;

`;

export const Description = styled.p`
    font-size: 0.7rem;
    color: var(--gray-500);
    text-align: justify;
`;

export const CartSection = styled.div`
    display: flex;
    justify-content : space-between ;
    align-items: center;
`;


export const Price = styled.p`
    font-size: 0.9rem;
    font-weight: 700;
`;