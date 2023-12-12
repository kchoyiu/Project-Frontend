import TopNavBar from "../../component/TopNavBar.tsx";
import ProductList from "../../component/ProductList.tsx";
import {Container} from "react-bootstrap";
import CarouselFade from "../../component/CarouselFade.tsx";

export default function ProductListingPage(){
    return (
        <>
            <TopNavBar/>
            <Container>
                <CarouselFade/>
                <ProductList/>
            </Container>
        </>
    )
}