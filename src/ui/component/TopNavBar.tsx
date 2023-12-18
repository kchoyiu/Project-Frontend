import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Button, Container, Form, Nav, Navbar} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useContext, useState} from "react";
import {LoginUserContext} from "../../App.tsx";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons/faCartShopping";
import * as FirebaseAuthService from "../../authService/FirebaseAuthService.ts"
import ShoppingCartOffcanvas from "./ShoppingCartOffcanvas.tsx";

export default function TopNavBar() {

    const loginUser = useContext(LoginUserContext)
    const navigate = useNavigate()

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const renderLoginContainer = () => {
        if (loginUser) {
            return(
            <div style={{marginLeft:"600px"}} className="d-flex align-items-center">
                {<div style={{color:"white", marginRight:"12px"}}>{loginUser.email}</div>}
                <Button variant={"success"} onClick={() => {
                    handleShow()}}><FontAwesomeIcon icon={faCartShopping} bounce style={{color: "#51501f",}}/></Button>
                <Button variant={"danger"}
                onClick={() =>{
                    FirebaseAuthService.handleSignOut(), navigate('/')}}
                style={{marginLeft:"8px"}}>Logout</Button>
            </div>)
        } else if (loginUser === null) {
            return(
                <Button onClick={() => {
                    navigate("/Login")
                }} style={{color: "white", cursor: "pointer", marginLeft: "720px"}}>Login</Button>
            )
        }else {
            return (
                <div className="spinner-grow text-light" role="status" style={{marginLeft:"600px"}}>
                    <span className="sr-only">Loading...</span>
                </div>
            )
        }
    }

    return (
        <>
            <ShoppingCartOffcanvas show={show} handleClose={handleClose}/>
            <Navbar sticky="top" expand="lg" className="bg-body-tertiary pt-0 pb-0">
                <Container fluid style={{background: "rgb(29,29,29)"}}>
                    <Navbar.Brand onClick={() => {
                        navigate("/")
                    }} style={{background: "greenyellow", borderRadius: "12px", fontSize: "24px", cursor: "pointer"}}
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
                            {renderLoginContainer()}
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}