import {Button, ButtonGroup, Card } from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons/faCartShopping";
import TopNavBar from "../../component/TopNavBar.tsx";
import CarouselFade from "../../component/CarouselFade.tsx";

type Params={
    productId: string
}
export default function ProductDetailPage() {
    return (
        <>
            <TopNavBar/>
            <div>
                <Card style={{width: '70%', border: "solid black", marginLeft: "50px", marginTop: "50px"}}>
                    <div style=
                             {{
                                 width: "70%",
                                 height: "300px",
                                 backgroundImage: `url(https://shoplineimg.com/62ce3bb1ca1bc7005cebff68/6468f38e349fe017eeb8d92c/800x.webp?source_format=jpg)`,
                                 backgroundRepeat: "no-repeat",
                                 backgroundPosition: "center",
                                 backgroundSize: "contain",
                             }}
                         className="m-lg-5 mt-3" >
                    </div>
                    <Card.Body>
                        <Card.Title><h2>曼城 23/24 主場球員版球衣 (英超版)</h2></Card.Title>
                        <Card.Text>
                            包10個英文字母及2個數目字<br/>額外英文字母1個+$10<br/>包英超冠軍章及反歧視章
                            <br/>
                            $999.00
                            <br/>
                            庫存量:90
                        </Card.Text>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="secondary">+</Button>
                            <input type="text" className="form-control text-center border border-1"
                                   placeholder="14"
                                   aria-label="Example text with button addon" aria-describedby="button-addon1"
                            style={{width:"50px"}}/>
                            <Button variant="secondary">-</Button>
                        </ButtonGroup>
                        <Button variant="dark" style={{color: "#ADFF2F"}}><FontAwesomeIcon icon={faCartShopping} beat
                                                                                           size="2xs"
                                                                                           style={{}}/>Add to Cart</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    )
}