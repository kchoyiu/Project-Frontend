import {Button, Container, Form} from "react-bootstrap";
import * as FirebaseAuthService from "../../../authService/FirebaseAuthService.ts"

export default function LoginPage() {
    return (
        <>
            <div className="mt-5">
            <Container className="d-flex justify-content-center align-items-center">
                <Form >
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"/>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                </Form>
            </Container>
            </div>
        </>
    )
}