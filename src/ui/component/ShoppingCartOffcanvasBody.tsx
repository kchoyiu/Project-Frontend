import {Offcanvas} from "react-bootstrap";
import {CartItemDto} from "../../data/dto/CartItemDto.ts";

type Props={
    cartItemDto:CartItemDto
}

export default function ShoppingCartOffcanvasBody({cartItemDto}:Props) {
    return (
        <Offcanvas.Body>
            <div>
                <div
                    style=
                    {{width:"100%",
                        height:"80px",
                        backgroundImage:`url(${cartItemDto.image_url})`,
                        backgroundRepeat:"no-repeat",
                        backgroundPosition:"center",
                        backgroundSize:"contain",
                    }}/>
                <div style={{fontSize:"12px"}}>
                {cartItemDto.name}<br/>
                Price: ${cartItemDto.price * cartItemDto.cart_quantity}<br/>
                Quantity:{cartItemDto.cart_quantity}
                </div>
            </div>
        </Offcanvas.Body>
    )
}