import React, {useEffect, useState} from "react";
import {
    Button,
    Card,
    Col,
    Container,
    FormControl,
    InputGroup,
    Row,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLongArrowAltLeft,
} from "@fortawesome/free-solid-svg-icons";
import mockData from "./response.json";
import {CartItemDto} from "../../../data/dto/CartItemDto.ts";

import Loading from "../../component/Loading.tsx";
import ShoppingCartContainer from "./component/ShoppingCartContainer.tsx";
import CartItem from "./component/CartItem.tsx";





export default function ShoppingCartPage() {

    const [cartItemList, setCarItemList] = useState<CartItemDto[] | undefined>(undefined)

    useEffect(() => {
        setCarItemList(mockData)
    }, []);


    return (
        <section className="h-100 h-custom" >
            <Container className="py-5 h-100">
                <Row className="justify-content-center align-items-center h-100">
                    <Col size="12">
                        <Card className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                            <Card.Body className="p-0">
                                <Row className="g-0">
                                    <Col lg="8">
                                        <div className="p-5">
                                            <div className="d-flex justify-content-between align-items-center mb-5">
                                                <h1 className="fw-bold mb-0 text-black">Shopping Cart</h1>
                                                <p className="mb-0 text-muted">{`${cartItemList?.length} items`}</p>
                                            </div>

                                            <hr className="my-4" />
                                            {
                                                cartItemList
                                                    ?<ShoppingCartContainer cartItemList={cartItemList}/>
                                                    :<Loading/>
                                            }

                                            <hr className="my-4" />

                                            {/* Repeat similar structure for other items */}

                                            <div className="pt-5">
                                                <h6 className="mb-0">
                                                    <a className="text-body">
                                                        <FontAwesomeIcon icon={faLongArrowAltLeft} className="me-2" /> Back to shop
                                                    </a>
                                                </h6>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col lg="4" className="bg-grey">
                                        <div className="p-5">
                                            <h3 className="fw-bold mb-5 mt-2 pt-1">Summary</h3>

                                            <hr className="my-4" />

                                            <div className="d-flex justify-content-between mb-4">
                                                <h5 className="text-uppercase">items {`${cartItemList?.length}`}</h5>
                                                <h5>Total:$</h5>
                                            </div>

                                            <h5 className="text-uppercase mb-3">Shipping</h5>

                                            <div className="mb-4 pb-2">
                                                <select className="select p-2 rounded bg-grey" style={{ width: "100%" }}>
                                                    <option value="1">Standard-Delivery- €5.00</option>
                                                    {/* Add other shipping options as needed */}
                                                </select>
                                            </div>

                                            <h5 className="text-uppercase mb-3">Give code</h5>

                                            <div className="mb-5">
                                                <InputGroup size="lg">
                                                    <FormControl placeholder="Enter your code" />
                                                </InputGroup>
                                            </div>

                                            <hr className="my-4" />

                                            <div className="d-flex justify-content-between mb-5">
                                                <h5 className="text-uppercase">Total price</h5>
                                                <h5>€ 137.00</h5>
                                            </div>

                                            <Button variant="dark" block-size="lg">
                                                Check Out
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}