import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button, Container, Form, Nav,Navbar} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

export default function TopNavBar() {

    const nevigate = useNavigate()

    return (
        <>
            <Navbar sticky="top" expand="lg" className="bg-body-tertiary">
                <Container fluid style={{background: "rgb(29,29,29)"}}>
                   <Navbar.Brand onClick={() =>{
                       nevigate("/")
                   }} style={{background: "greenyellow", borderRadius: "12px", fontSize: "24px", cursor:"pointer"}}
                                               className="mt-2 mb-2 ps-2 pe-2">Jersey Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll"/>
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{maxHeight: '100px',}}
                            navbarScroll
                        >
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
                            <Nav.Link onClick={() =>{
                                nevigate("/Login")
                            }} style={{color: "white", cursor:"pointer"}}>Login</Nav.Link>
                            <Nav.Link href="#action2" style={{color: "white"}}>Shopping Cart</Nav.Link>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}