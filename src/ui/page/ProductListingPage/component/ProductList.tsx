
import {Row} from "react-bootstrap";
import {ProductListDto} from "../../../../data/dto/ProductDto.ts";
import ProductCard from "./ProductCard.tsx";

type Props ={
    productDto:ProductListDto[]
}
export default function ProductList({productDto}:Props) {
    return (
        <>
            <div style={{marginTop:"12px"}}>
            <Row xs={2} md={3} className="g-4">
                {productDto.map((item) => (
                    <ProductCard product={item} key={item.pid}/>
                ))}
            </Row>
            </div>
        </>
    )
}