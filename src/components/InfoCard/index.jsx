import { ButtonCart, Category, Container, Description, PriceCard, Title } from "./styled";

const InfoCard = () => {
    return (
        <Container>
            <Category>
                PERFUME
            </Category>
            <Title>Gabrielle Essence Eau De Parfum</Title>
            <Description>
                A floral, solar and voluptuous interpretation composed by Olivier Polge, 
                Perfumer-Creator for the House of CHANEL.
            </Description>
            <PriceCard>
                <h1>$149.99</h1>
                <p>$169.99</p>
            </PriceCard>
            <ButtonCart>
                <img src="./images/icon-cart.svg" alt="carrinho" />
                Adicionar ao carinho
            </ButtonCart>
        </Container>
    )
};


export default InfoCard;