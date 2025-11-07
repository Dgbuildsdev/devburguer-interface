import { OffersCarousel, CategoriesCarousel } from "../../components";
import { Banner, Container, Content } from "./styles";


export function Home() {
    return (
        <main>
            <Banner>
                <h1>Bem-vindo!</h1>
            </Banner>
            <Container>
                <Content>
                <CategoriesCarousel />
                <OffersCarousel />
                </Content>
            </Container>
        </main>
    );
}

