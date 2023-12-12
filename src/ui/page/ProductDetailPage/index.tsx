import {Button, Card, Container} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons/faCartShopping";
import TopNavBar from "../../component/TopNavBar.tsx";
import {useParams} from "react-router-dom";
import QuantitySelector from "../../component/QuantitySelector.tsx";
import {useState} from "react";

type Params = {
    productId: string
}
export default function ProductDetailPage() {

    const {productId} = useParams<Params>()

    const [quantity, setQuantity] = useState<number>(1);

    const handleMinus = () => {
        if (quantity>1){
            setQuantity((quantity) => quantity-1);
        }
    }

    const handlePlus = () => {
        // if (quantity>1){
            setQuantity((quantity) => quantity+1);
       // }
    }

    return (
        <>
            <TopNavBar/>
            <Container>
                <Card style={{
                    width: '50%',
                    border: "solid black",
                    marginLeft: "15%",
                    marginTop: "50px",
                    background: "gray"
                }}>
                    <div style=
                             {{
                                 width: "70%",
                                 height: "300px",
                                 backgroundImage: `url(https://shoplineimg.com/62ce3bb1ca1bc7005cebff68/6468f38e349fe017eeb8d92c/800x.webp?source_format=jpg)`,
                                 backgroundRepeat: "no-repeat",
                                 backgroundPosition: "center",
                                 backgroundSize: "contain",
                             }}
                         className="m-lg-5 mt-3">
                    </div>
                    <Card.Body>
                        <Card.Title><h2>曼城 23/24 主場球員版球衣 (英超版)</h2></Card.Title>
                        <Card.Text><h3>
                            包10個英文字母及2個數目字<br/>額外英文字母1個+$10<br/>包英超冠軍章及反歧視章
                            <br/>
                            $999.00</h3>
                        </Card.Text>
                        <div className="d-flex justify-content-center">
                        <QuantitySelector quantity={quantity} handleMinus={handleMinus} handlePlus={handlePlus}/>
                        <Button variant="dark" style={{color: "#ADFF2F", marginLeft:"8px"}}><FontAwesomeIcon icon={faCartShopping} beat
                                                                                           size="2xs"
                                                                                           style={{}}/>Add to
                            Cart</Button>
                        </div>
                    </Card.Body>
                </Card>
            </Container>
        </>
    )
}