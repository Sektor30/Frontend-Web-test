import styled from "styled-components";

export const InfoContiner = styled.div`
    margin: 30px auto 50px auto;
    text-align: center;
    width: 70%;
    border-bottom: 1px solid var(--light-color);
    
    
`;


export const TituloContiner = styled.h1`
    
    text-align: center;
    width: 30%;
    margin-left: 35%;
    font-size: 35px;


    @media (max-width:950px) {
        
        margin-left:50px;
    }

    @media (max-width:750px) {
        font-size:4px;
        margin-left:35px;
    }

    @media (max-width:415px) {
        font-size:4px;
        margin-left:-35px;
    }
    

`;

export const InfoContinerH5 = styled.h5`
    font-size: 2rem;
    font-family: var(--font-txt);
    font-weight: normal;
    width: 80%;
    margin: 3rem auto 2rem auto;
`;
