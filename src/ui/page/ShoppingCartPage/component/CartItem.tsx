import {Button, Col, Image, Row} from "react-bootstrap";
import QuantitySelector from "../../../component/QuantitySelector.tsx";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";
import {CartItemDto} from "../../../../data/dto/CartItemDto.ts";
import * as CartItemApi from ".././../../../api/ShoppingCartApi.ts"

type Prop = {
    item: CartItemDto,
    carItemList: CartItemDto[],
    setCartItemList: (cartItemList: CartItemDto[]) => void
}

export default function CartItem({item, setCartItemList, carItemList}: Prop) {
    const [quantity, setQuantity] = useState<number>(item.cart_quantity)
    const [isPatchingQuantity, setIsPatchingQuantity] = useState<boolean>(false)
    const [isDeleting, setIsDeleting] = useState<boolean>(false)


    const handleMinus = async () => {
        if (quantity > 1) {
            setIsPatchingQuantity(true)
            const data = await CartItemApi.patchCartItem(item.pid, quantity - 1);
            setQuantity(data.cart_quantity)
            setIsPatchingQuantity(false)
        }
    }


    const handlePlus = async () => {
        setIsPatchingQuantity(true)
        const data = await CartItemApi.patchCartItem(item.pid, quantity + 1);
        setQuantity(data.cart_quantity)
        setIsPatchingQuantity(false)
    }

    const handleDelete = async () => {
        setIsDeleting(true)
        await CartItemApi.deleteCartItem(item.pid);
        const updatedList = carItemList.filter((cartItem) => (
            cartItem.pid !== item.pid
        ));
        setCartItemList(updatedList);
        setIsDeleting(false)
    }


    const renderSelectorButton = () => {
        if (isPatchingQuantity) {
            return (
                <Button disabled
                        style={{
                            width: "40px",
                            height: "40px",
                            background: "black"
                        }}>
                    <span className="spinner-border spinner-border-sm"
                          role="status"
                          aria-hidden="true"></span>
                </Button>
            )
        } else {
            return (
                <QuantitySelector
                    quantity={quantity}
                    handleMinus={handleMinus}
                    handlePlus={handlePlus}
                />)
        }
    }


    return (
        <>
            <Row className="mb-4 d-flex justify-content-between align-items-center">
                <Col md="2" lg="2" xl="2">
                    <Image
                        src={item.image_url}
                        fluid
                        rounded
                        className="rounded-3"
                    />
                </Col>
                <Col md="3" lg="3" xl="3">
                    <td><h6 className="text-muted">{item.name}</h6></td>
                </Col>
                <Col md="3" lg="3" xl="3" className="d-flex align-items-center">
                    {renderSelectorButton()}
                </Col>
                <Col md="3" lg="2" xl="2" className="text-end">
                    <h6 className="mb-0">${(Number(item.price) * quantity).toFixed(2)}</h6>
                </Col>
                <Col md="1" lg="1" xl="1" className="text-end">
                    {
                        isDeleting ? <Button variant={"light"}>
                                <span className="spinner-border spinner-border-sm"
                                      role="status"
                                      aria-hidden="true"></span>
                            </Button> :
                            <Button variant={"light"} className="text-muted"
                                    onClick={handleDelete}>
                                <FontAwesomeIcon icon={faTimes}/>
                            </Button>
                    }
                </Col>
            </Row>
        </>
    )
}