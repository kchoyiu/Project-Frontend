import {Button, Card, Container} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons/faCartShopping";
import TopNavBar from "../../component/TopNavBar.tsx";
import {useNavigate, useParams} from "react-router-dom";
import QuantitySelector from "../../component/QuantitySelector.tsx";
import {useContext, useEffect, useState} from "react";
import {ProductDetailDto} from "../../../data/dto/ProductDto.ts";
import Loading from "../../component/Loading.tsx";
import * as ProductApi from "../../../api/ProductApi.ts"
import {LoginUserContext} from "../../../App.tsx";
import  * as CartItemApi from "../../../api/ShoppingCartApi.ts"
import {faLongArrowAltLeft} from "@fortawesome/free-solid-svg-icons";
import AddedToCartToast from "./componet/AddedToCartToast.tsx";


type Params = {
    productId: string
}
export default function ProductDetailPage() {

    const {productId} = useParams<Params>()
    const loginUser = useContext(LoginUserContext)
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState<number>(1);
    const [productDetail, setProductDetail] = useState<ProductDetailDto | undefined>(undefined)
    const [isAddingCart,setIsAddingCart] = useState<boolean>(false)
    const [showToast,setShowToast] = useState<boolean>(false);

    const handleMinus = () => {
        if (quantity > 1) {
            setQuantity((quantity) => quantity - 1);
        }
    }

    const handlePlus = () => {
        if (productDetail && quantity < productDetail?.stock) {
            setQuantity((quantity) => quantity + 1);
        }
    }

    const handleAddToCart = async () => {
       if (loginUser){
           setIsAddingCart(true);
           await CartItemApi.putCartItem(productDetail!.pid,quantity);
           setIsAddingCart(false);
           setShowToast(true);
       }else if (loginUser===null){
           navigate("/login")
       }

    };

    const getProductDetail = async (productId: string) => {
        try {
            const response = await ProductApi.getProductDetail(productId)
            setProductDetail(response);
            document.title =response.name
        } catch (e) {
            navigate("/error");
        }
    }

    const renderSelectorAndButton = (productDetail:ProductDetailDto) => {
        if (productDetail?.stock>0){
        return (
            <>
                <QuantitySelector quantity={quantity} handleMinus={handleMinus}
                                  handlePlus={handlePlus}/>
                {renderAddToCartButton()}
            </>
        )
        } else {
            return (
                <div>
                    <Button disabled variant="danger">
                        Out of Stock
                    </Button>
                    <div style={{marginTop: "24px"}}>
                        <a className="text-body" onClick={() => {
                            navigate("/")
                        }} style={{cursor: "pointer"}}>
                            <FontAwesomeIcon icon={faLongArrowAltLeft} className="me-2"/> Back to shop
                        </a>
                    </div>
                </div>
            )
        }
    }

    const renderAddToCartButton = () =>{
        if (isAddingCart){
            return(
                <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
            )
        }else {
            return (
                <>
                    <Button variant="dark"
                            style={{color: "#ADFF2F", marginTop: "8px"}}
                            onClick={handleAddToCart}><FontAwesomeIcon
                        icon={faCartShopping} beat
                        size="2xs"
                        style={{}}/>Add to
                        Cart</Button>
                    <div style={{marginTop: "24px"}}>
                        <a className="text-body" onClick={() => {
                            navigate("/")
                        }} style={{cursor: "pointer"}}>
                            <FontAwesomeIcon icon={faLongArrowAltLeft} className="me-2"/> Back to shop
                        </a>
                    </div>
                </>
            )
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
                productDetail ? (
                        <Container style={{width: "90%", paddingBottom: "12px", paddingLeft: "4px", paddingRight: "4px"}}>
                            <Card style={{
                                width: '100%',
                                margin: "auto auto",
                                background: "white",
                                marginTop: "12px"
                            }}>
                                <div className={"d-flex justify-content-between align-items-center"}>
                                    <img src={productDetail.imageUrl}
                                         style={{
                                             width: "50%",
                                             margin: "auto auto",
                                             marginTop: "12px",
                                             padding: "8px 8px 8px 8px",
                                         }}/>
                                    <div style={{marginRight:"8px"}}>
                                        <h2>{productDetail.name}</h2>
                                        <div style={{textAlign: "-webkit-match-parent"}}>
                                            <h6>{productDetail.description}</h6>
                                        </div>
                                        <h5>庫存量: {productDetail.stock}</h5>
                                        <div><h3>${(Number(productDetail.price).toFixed(2))}</h3></div>
                                        <hr/>
                                        {renderSelectorAndButton(productDetail)}
                                    </div>
                                </div>
                            </Card>
                        </Container>) :
                    (<Loading/>)
            }
            <AddedToCartToast showToast={showToast} setShowToast={setShowToast}/>
        </>
    )
}