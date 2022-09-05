import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    //align-items: center;
    justify-content: center;
    width: 315px;
    height: 400px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px; 
    padding: 0 30px;
    
    @media (min-width: 1440px) {
        width: 300px;
        height: 400px;        
    }
`

export const Category = styled.h2`
    font-size: 14px;
    margin-right: auto;   
    font-family: Montserrat;
    font-weight: 500;
    color: hsl(228, 12%, 48%);
    letter-spacing: 5px;
    margin-bottom: 18px;
`
export const Title = styled.h1`
    font-size: 36px;
    margin-right: auto;   
    font-family: Fraunces;
    font-weight: 700;     
    color: hsl(212, 21%, 14%); 
    margin-bottom: 18px;
    line-height: 2.5rem;
`
export const Description = styled.p`  
    color: hsl(228, 12%, 48%);
    font-weight: 500;
    line-height: 1.5rem;
    font-size: 14px;
    margin-bottom: 18px;
`;

export const PriceCard = styled.div`
    display: flex;
    flex-direction: row;    
    width: 100%;
    align-items: center;
    margin-bottom: 18px;

    h1 {             
        color: hsl(158, 36%, 37%);
        font-family: 'Fraunces';
        font-weight: 700;        
        height: auto;
    }
    p {
        text-decoration: line-through;
        color: hsl(228, 12%, 48%);
        font-family: 'Fraunces';
        font-weight: 500;     
        margin-left: 16px;
    }
`;

export const ButtonCart = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    border-radius: 10px;
    border: none;
    background-color: hsl(158, 36%, 37%);
    color: hsl(0, 0%, 100%);
    font-weight: 500;
    cursor: pointer;        

    img {
        margin-right: 10px;
        font-weight: 500;
    }
`;