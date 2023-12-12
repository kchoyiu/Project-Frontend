import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons/faCartShopping";
import {Col} from "react-bootstrap";
import {ProductListDto} from "../../../../data/dto/ProductDto.ts";

type Prop ={
    product:ProductListDto;
}

export default function ProductCard({product}:Prop){
    return(
        <Col>
            <div className="d-flex justify-content-between" style={{margin:"10px"}}>
                <Card style={{width: '23rem'}}>
                    <div style=
                             {{width:"100%",
                                 height:"200px",
                                 backgroundImage:`url(${product.image_url})`,
                                 backgroundRepeat:"no-repeat",
                                 backgroundPosition:"center",
                                 backgroundSize:"contain",
                                 marginTop:"12px"}}>
                    </div>
                    <Card.Body>
                        <Card.Title style={{height:"64px"}}>{product.name}</Card.Title>
                        <Card.Text>
                            ${product.price}
                        </Card.Text>
                        <Button variant="dark" style={{color:"#ADFF2F"}}><FontAwesomeIcon icon={faCartShopping} beat size="2xs" style={{

                        }}/>Buy</Button>
                    </Card.Body>
                </Card>
            </div>
        </Col>
    )
}