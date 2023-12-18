import {useContext, useEffect, useState} from "react";
import {
    Button,
    Card,
    Col,
    Container,
    FormControl,
    InputGroup,
    Row, Spinner,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLongArrowAltLeft,
} from "@fortawesome/free-solid-svg-icons";
import {CartItemDto} from "../../../data/dto/CartItemDto.ts";
import Loading from "../../component/Loading.tsx";
import ShoppingCartContainer from "./component/ShoppingCartContainer.tsx";
import {useNavigate} from "react-router-dom";
import TopNavBar from "../../component/TopNavBar.tsx";
import * as CartItemApi from "../../../api/ShoppingCartApi.ts";
import {LoginUserContext} from "../../../App.tsx";
import EmptyCart from "./component/EmptyCart.tsx";


export default function ShoppingCartPage() {

    const [cartItemList, setCarItemList] = useState<CartItemDto[] | undefined>(undefined)

    const navigate = useNavigate()


    const loginUser = useContext(LoginUserContext)

   const getCartItemList = async () =>{
        try {
            const data = await CartItemApi.getCartItem();
            setCarItemList(data);
        }catch (error){
            navigate("/Error")
        }
   }

    const calTotalPrice = (cartDataList: CartItemDto[]): string => {
        let total = 0;
        for (const cartData of cartDataList) {
            total += cartData.price * cartData.cart_quantity;
        }
        return total.toFixed(2);
    }

    const renderCartItemContainer = (cartItemList: CartItemDto[]) => {
        if(cartItemList.length>0){
            return(
            <>
                <ShoppingCartContainer cartItemList={cartItemList} setCartItemList={setCarItemList}/>
            </>
        )
            }else {
            return (
                <EmptyCart/>
            )
        }
    }

    const renderCheckOutButton = (cartItemList: CartItemDto[]) => {
        if (cartItemList.length>0){
            return(
                <Button variant="dark" block-size="lg">
                    Check Out
                </Button>
            )
        }else {
            return (
                <Button disabled variant="dark" block-size="lg">
                    購物車沒有貨品
                </Button>
            )
        }
    }


    useEffect(() => {
        if(loginUser) {
            getCartItemList()

        }else if (loginUser===null){
            navigate('/login')
        }
    }, [loginUser]);


    return (
        <>
            <TopNavBar/>
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
                                                cartItemList?
                                                    renderCartItemContainer(cartItemList)
                                                    : <Loading/>
                                            }
                                            <hr className="my-4" />
                                            <div className="pt-5">
                                                <h6 className="mb-0">
                                                    <a className="text-body"  onClick={() => {
                                                        navigate("/")}} style={{cursor:"pointer"}}>
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
                                                <h5 className="text-uppercase">items: {`${cartItemList?.length}`}</h5>
                                            </div>

                                            <h5 className="mb-3">Shipping</h5>

                                            <div className="mb-4 pb-2">
                                                <select className="select p-2 rounded bg-grey" style={{ width: "100%" }}>
                                                    <option value="1">Standard-Delivery</option>
                                                </select>
                                            </div>

                                            <h5>Give code</h5>

                                            <div className="mb-5">
                                                <InputGroup size="lg">
                                                    <FormControl placeholder="Enter your code" />
                                                </InputGroup>
                                            </div>

                                            <hr className="my-4" />

                                            <div className="d-flex justify-content-between mb-5">
                                                {
                                                    cartItemList ?
                                                        <h3>Total:${calTotalPrice(cartItemList)}</h3>
                                                        : <Spinner animation="border" role="status">
                                                            <span className="visually-hidden">Loading...</span>
                                                        </Spinner>
                                                }
                                            </div>
                                            {
                                                cartItemList&&
                                                    renderCheckOutButton(cartItemList)
                                            }
                                        </div>
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
    );
}