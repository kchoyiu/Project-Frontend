import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import {Col, Row} from "react-bootstrap";

export default function ProductList() {
    return (
        <>
            <div style={{marginTop:"12px"}}>
            <Row xs={2} md={3} className="g-4">
                {Array.from({ length: 18 }).map((_, idx) => (
                    <Col key={idx}>
                    <div className="d-flex justify-content-between" style={{margin:"10px"}}>
                    <Card style={{width: '25rem'}}>
                        <div style=
                                 {{backgroundImage:"src"}}>
                        </div>
                        <Card.Body>
                            <Card.Title>Product Title</Card.Title>
                            <Card.Text>
                                Product Detail
                                <br/>
                                Price
                            </Card.Text>
                            <Button variant="dark" style={{color:"#ADFF2F"}}><FontAwesomeIcon icon={faCartShopping} beat size="2xs" style={{

                            }}/>Buy</Button>
                        </Card.Body>
                    </Card>
                    </div>
                    </Col>
                ))}
            </Row>
            </div>
        </>
    )
}