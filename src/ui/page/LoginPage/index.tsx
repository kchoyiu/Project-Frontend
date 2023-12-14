import {Button, CardBody, Col, Container, Form, Row} from "react-bootstrap";
import * as FirebaseAuthService from "../../../authService/FirebaseAuthService.ts"
import TopNavBar from "../../component/TopNavBar.tsx";
import Card from "react-bootstrap/esm/Card";
import {useContext, useEffect, useState} from "react";
import * as React from "react";
import {useNavigate} from "react-router-dom";
import { GoogleLoginButton } from "react-social-login-buttons";
import {LoginUserContext} from "../../../App.tsx";


export default function LoginPage() {
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const loginUser = useContext(LoginUserContext)
    const navigate = useNavigate()

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }
    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) =>{
        event.preventDefault();
        const loginResult = await FirebaseAuthService.handleSignInWithEmailAndPassword(email,password);
        if (loginResult){
            navigate(-1)
        }
    }

    useEffect(() => {
        if(loginUser){
            navigate("/")
        }
    }, [loginUser]);

    return (
        <div>
            <TopNavBar/>
            <Container className="my-5" style={{paddingBottom: "100px", paddingTop: "100px"}}>

                <Card style={{background: "rgb(250,235,215,0.7)", border:"1px solid black"}}>
                    <Row className='g-0'>

                        <Col md='6'>
                            <img src='https://ps.w.org/login-customizer/assets/icon-256x256.png?rev=2455454'
                                 className='rounded-start w-75'/>
                        </Col>

                        <Col md='6'>
                            <CardBody className='d-flex flex-column'>
                                <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Sign into your
                                    account</h5>
                                <div className='d-flex flex-row justify-content-start'>
                                    <Container>
                                        <Form
                                        onSubmit={handleSubmit}
                                        >
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Email address</Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Enter email"
                                                    onChange={handleEmailChange}
                                                    value={email}
                                                />
                                            </Form.Group>
                                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                                <Form.Label>Password</Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    placeholder="Password"
                                                    onChange={handlePasswordChange}
                                                    value={password}/>
                                            </Form.Group>
                                            <Button variant="primary" type="submit">
                                                Login
                                            </Button>
                                            <hr/>
                                            <GoogleLoginButton onClick={() =>{
                                                FirebaseAuthService.handleSignInWithGoogle()
                                            }} />
                                        </Form>
                                    </Container>

                                </div>

                            </CardBody>
                        </Col>

                    </Row>
                </Card>

            </Container>
        </div>
    )
}