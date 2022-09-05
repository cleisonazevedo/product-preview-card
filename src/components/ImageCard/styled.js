import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;   
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(./images/image-product-mobile.jpg);
    width: 375px;
    height: 266px;

    @media (min-width: 1440px) {
        background-image: url(./images/image-product-desktop.jpg);
        border-top-left-radius: 10px;
        border-top-right-radius: 0px;     
        border-bottom-left-radius: 10px;
        width: 300px;
        height: 450px;
        padding: 30px;
        background-size: cover;
    }
/*     
    img {
        width: 375px;   
        border-radius: inherit;        

        @media (min-width: 1440px) {
            src: url(./images/image-product-desktop.jpg);
        }
    } */
`
