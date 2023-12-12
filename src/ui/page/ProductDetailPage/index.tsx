import {Button, Card, Container} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons/faCartShopping";
import TopNavBar from "../../component/TopNavBar.tsx";
import {useNavigate, useParams} from "react-router-dom";
import QuantitySelector from "../../component/QuantitySelector.tsx";
import {useEffect, useState} from "react";
import {ProductDetailDto} from "../../../data/dto/ProductDto.ts";
import Loading from "../../component/Loading.tsx";
import * as ProductApi from "../../../api/GetProductApi.ts"

type Params = {
    productId: string
}
export default function ProductDetailPage() {

    const {productId} = useParams<Params>()

    const navigate = useNavigate();
    const [quantity, setQuantity] = useState<number>(1);
    const [productDetail, setProductDetail] = useState<ProductDetailDto | undefined>(undefined)

    const handleMinus = () => {
        if (quantity > 1) {
            setQuantity((quantity) => quantity - 1);
        }
    }

    const handlePlus = () => {
        if (productDetail && quantity > productDetail?.stock) {
            setQuantity((quantity) => quantity + 1);
        }
    }

    const getProductDetail = async (productId: string) => {
        try {
            const response = await ProductApi.getProductDetail(productId)
            setProductDetail(response);
        } catch (e) {
            navigate("/error");
        }
    }

    useEffect(() => {
        if (productId) {
            getProductDetail(productId)
        } else {
            navigate("/error")
        }
    }, []);

    return (
        <>
            <TopNavBar/>
            {
                productDetail ?
                    <Container style={{width:"42%"}}>
                        <Card style={{
                            width: '100%',
                            margin:"auto auto",
                            background: "gray"
                        }}>
                            <img src={productDetail.imageUrl}/>
                            <Card.Body>
                                <h2>{productDetail.name}</h2>
                                <h3>{productDetail.description}
                                    <br/>
                                    ${[productDetail.price]}</h3>
                                <div className="d-flex justify-content-center">
                                    <QuantitySelector quantity={quantity} handleMinus={handleMinus}
                                                      handlePlus={handlePlus}/>
                                    <Button variant="dark"
                                            style={{color: "#ADFF2F", marginLeft: "8px"}}><FontAwesomeIcon
                                        icon={faCartShopping} beat
                                        size="2xs"
                                        style={{}}/>Add to
                                        Cart</Button>
                                </div>
                            </Card.Body>
                        </Card>
                    </Container> :
                    <Loading/>

            }

        </>
    )
}