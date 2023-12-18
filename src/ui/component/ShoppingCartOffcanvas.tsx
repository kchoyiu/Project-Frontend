import {Button, Offcanvas, Spinner} from "react-bootstrap";
import ShoppingCartOffcanvasBody from "./ShoppingCartOffcanvasBody.tsx";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons/faCartShopping";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import {CartItemDto} from "../../data/dto/CartItemDto.ts";
import Loading from "./Loading.tsx";
import * as CaritemApi from "../../api/ShoppingCartApi.ts"
import {useNavigate} from "react-router-dom";


type Props ={
    show: boolean,
    handleClose: ()=>void
}

export default function ShoppingCartOffcanvas({show,handleClose}:Props){
    const [cartDataList,setCartDataList] = useState<CartItemDto[] | undefined>(undefined)
    const navigate = useNavigate()

    const getShoppingCartDataList = async () =>{
        try {
            const  data = await CaritemApi.getCartItem()
            setCartDataList(data)
        }catch (error){
            navigate("/Error")
        }
    }

    const calTotalPrice = (cartDataList: CartItemDto[]): number => {
        let total = 0;
        for (const carData of cartDataList) {
            total += carData.price * carData.cart_quantity;
        }
        return total;
    }

    return(
        <Offcanvas show={show}
                   onHide={handleClose}
                   onEnter={getShoppingCartDataList}
                   onExited={()=>{
                       setCartDataList(undefined)
                   }}
                   placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title style={{width:"100%",paddingBottom:"8px",paddingTop:"8px"}}>
                    <h1>ShoppingCart</h1><br/>
                    <div className="d-flex justify-content-between align-items-center" style={{width:"100%"}}>
                        <div>
                            Total:$ {
                            cartDataList ?
                                calTotalPrice(cartDataList)
                                :
                                <Spinner animation="border" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </Spinner>
                        }
                        </div>
                        <div>
                            <Button onClick={()=>{ navigate("/shoppingcart")}}><FontAwesomeIcon icon={faCartShopping} bounce style={{color: "#51501f",}}/></Button>
                        </div>
                    </div>
                </Offcanvas.Title>
            </Offcanvas.Header>
            {
                cartDataList?
                cartDataList.map((item) =>(
                    <ShoppingCartOffcanvasBody cartItemDto={item} key={item.pid}/>
                    ))
                    :<Loading/>

            }
        </Offcanvas>
    )
}