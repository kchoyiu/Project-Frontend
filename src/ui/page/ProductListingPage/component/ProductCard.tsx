import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Col} from "react-bootstrap";
import {ProductListDto} from "../../../../data/dto/ProductDto.ts";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

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
                       <Link to={`/product/${product.pid}`}><Button variant="dark" style={{color:"#ADFF2F"}}><FontAwesomeIcon icon={faEye} beat style={{

                        }}/>Detail</Button></Link>
                    </Card.Body>
                </Card>
            </div>
        </Col>
    )
}