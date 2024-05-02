import styled from "styled-components";

export const Main = styled.div`
    display: flex;
    position: relative;
    flex-direction: column;
    padding: 10px;
    background-color: var(--white);
    width: 100%;
    height: 100%;
    border-radius: 10px;
`;

export const ImageSection = styled.div`
  
  
  > div {
    position: unset !important;
  }


  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`;

export const InfosSection = styled.div`
    display: flex;
    
    flex-direction: column;
   
    flex-wrap: wrap;
`;

export const CartSection = styled.div`

    display: flex;
    justify-content : space-between ;
    align-items: center;
`;

export const Description = styled.p`
    font-size: 0.7rem;
    color: var(--gray-500);
    text-align: justify;
`;

export const Price = styled.p`
    font-size: 0.9rem;
    font-weight: 700;
`;