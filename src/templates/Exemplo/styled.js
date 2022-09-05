import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;   
    border-radius: 10px;
    width: 425px;  
    background-color: hsl(0, 0%, 100%);
    color: white;
    margin: calc(50vh - 350px) auto;

    @media (min-width: 375px) {
        width: 375px;
    }

    @media (min-width: 1440px) {
        flex-direction: row;
        width: 600px;
    }
`