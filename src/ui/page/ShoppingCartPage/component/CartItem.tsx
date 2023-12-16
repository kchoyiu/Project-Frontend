import {Col, Image, Row} from "react-bootstrap";
import QuantitySelector from "../../../component/QuantitySelector.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import React, {useState} from "react";
import {ProductDetailDto} from "../../../../data/dto/ProductDto.ts";
import {CartItemDto} from "../../../../data/dto/CartItemDto.ts";

type Prop ={
    cartItem:CartItemDto;
}

export default function CartItem({cartItem}:Prop){

    const [productDetail, setProductDetail] = useState<ProductDetailDto | undefined>(undefined)
    const [quantity, setQuantity] = useState<number>(1);
    const handleMinus = () => {
        if (quantity > 1) {
            setQuantity((quantity) => quantity - 1);
        }
    }

    const handlePlus = () => {
        // if (productDetail && quantity < productDetail?.stock) {
        setQuantity((quantity) => quantity + 1);
        // }
    }
    return(
        <>
            <Row className="mb-4 d-flex justify-content-between align-items-center">
                <Col md="2" lg="2" xl="2">
                    <Image
                        src={cartItem.image_url}
                        fluid
                        rounded
                        className="rounded-3"
                    />
                </Col>
                <Col md="3" lg="3" xl="3">
                    <h6 className="text-muted">{cartItem.Product_Name}</h6>
                </Col>
                <Col md="3" lg="3" xl="3" className="d-flex align-items-center">
                    <QuantitySelector quantity={quantity} handleMinus={handleMinus} handlePlus={handlePlus}/>
                </Col>
                <Col md="3" lg="2" xl="2" className="text-end">
                    <h6 className="mb-0">{cartItem.price}</h6>
                </Col>
                <Col md="1" lg="1" xl="1" className="text-end">
                    <a href="#!" className="text-muted">
                        <FontAwesomeIcon icon={faTimes} />
                    </a>
                </Col>
            </Row>

        </>
    )
}