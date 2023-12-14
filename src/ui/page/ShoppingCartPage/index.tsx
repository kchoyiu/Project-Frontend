import {CardBody, Col, Container, Row} from "react-bootstrap";
import Card from "react-bootstrap/esm/Card";

export default function ShoppingCart(){
    return(
        <>
            <Container>
                <Row className="justify-content-center align-items-center h-100">
                    <Col>
                        <Card className="card-registration card-registration-2" style={{ borderRadius: "15px" }}>
                            <CardBody className="p-0">
                                <Row className="g-0">
                                    <Col className="col-lg-8">
                                        <div className="p-5">
                                            <div className="d-flex justify-content-between align-items-center mb-5">
                                                <h1>
                                                    Shopping Cart
                                                </h1>
                                                <div className="mb-0 text-muted">
                                                3 items
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    )
}