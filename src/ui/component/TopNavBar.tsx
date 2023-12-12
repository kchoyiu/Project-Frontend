import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button, Container, Form, Nav,Navbar} from "react-bootstrap";

export default function TopNavBar() {
    return (
        <>
            <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
                <Container fluid style={{background: "rgb(29,29,29)"}}>
                    <Navbar.Brand href="#" style={{background: "greenyellow", borderRadius: "12px", fontSize: "24px"}}
                                  className="mt-2 mb-2 ps-2 pe-2">Jersey Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{maxHeight: '100px',}}
                            navbarScroll
                        >
                            <Nav.Link href="#action1" style={{color: "white"}}>Login</Nav.Link>
                            <Nav.Link href="#action2" style={{color: "white"}}>Shopping Cart</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="success"><FontAwesomeIcon icon={faMagnifyingGlass} bounce
                                                                       size="2xs"/></Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}