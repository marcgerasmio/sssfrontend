import React, { useState } from 'react';
import { Navbar, Container, Image, Nav, Button, Card, InputGroup, Form, Row, Col } from "react-bootstrap";
import { IoGlobeSharp, IoLocation } from "react-icons/io5";
import { FaPhoneAlt, FaUserAlt, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { AiFillGoogleSquare } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import "./App.css";

function Login() {
    const [emailaddress, setEmailaddress] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    // const home = () => { navigate("/"); }
            
    const login = async () => {
        try {
            const response = await fetch('http://sssbackend.test/api/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    emailaddress,
                    password
                })
            });
            if (!response.ok) {
                alert("Invalid credentials");
                return;
            }
            const data = await response.json();
            console.log(data);
            sessionStorage.setItem('user_id', data.user.id);
            navigate("/dashboard");
        } catch (error) {
            console.error("Error during login:", error);
            alert("Invalid credentials");
        }
    };
    
    return (
        <>
            <Navbar className="navbar" expand="lg">
                <Container>
                    <div className="d-flex align-items-center w-100">
                        <Navbar.Brand href="#" className="d-flex align-items-center">
                            <Image src="sss.png" alt="" fluid />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
                    </div>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="ms-5">
                            <Link to='/' className='text-style fw-bold text-white fs-5 text-decoration-none mt-2 me-3'>Home</Link>
                            <Nav.Link href="#features" className="fw-bold text-white fs-5 text-style">Download</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className="d-flex justify-content-center align-items-center responsive-height">
                <Row className="w-100 justify-content-center">
                    <Col xs={12} md={6}>
                        <Card className="p-4 login-card">
                            <Card.Body>
                                <Card.Text>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">
                                            <FaUserAlt />
                                        </InputGroup.Text>
                                        <Form.Control
                                            placeholder="Email"
                                            aria-label="Email"
                                            aria-describedby="basic-addon1"
                                            className="p-3"
                                            value={emailaddress}
                                            onChange={(e) => setEmailaddress(e.target.value)}
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-4">
                                        <InputGroup.Text id="basic-addon1">
                                            <RiLockPasswordFill />
                                        </InputGroup.Text>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            aria-label="Password"
                                            aria-describedby="basic-addon1"
                                            className="p-3"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </InputGroup>
                                    <div className="d-flex justify-content-center mb-4">
                                        <Button variant="primary" className="fw-bold text-style w-100 p-3 app-buttons" onClick={login}>Login</Button>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <span className="text-style">Don't have an account?</span> &nbsp;
                                        <Link to='/register' className='text-style'>Register</Link>
                                    </div>
                                    <hr />
                                    <Container className="d-flex justify-content-center gap-3">
                                        <FaFacebookSquare size={32} />
                                        <FaSquareXTwitter size={32} />
                                        <AiFillGoogleSquare size={35} />
                                        <FaInstagramSquare size={32} />
                                    </Container>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Navbar bg="dark" data-bs-theme="dark" className="footer-nav fixed-bottom p-4">
                <Container className="d-flex flex-column flex-md-row justify-content-md-between">
                    <>
                        <p className="text-white mb-2 mb-md-0">
                            <IoGlobeSharp size={25} />&nbsp;
                            <span>Terms of Service</span>
                        </p>
                        <p className="text-white mb-2 mb-md-0">
                            <IoLocation size={25} />&nbsp;
                            <span>SSS Building East Avenue, Diliman Quezon City, Philippines</span>
                        </p>
                        <p className="text-white mb-2 mb-md-0">
                            <FaPhoneAlt size={21} />&nbsp;
                            <span>02-1455 or 8-1455</span>
                        </p>
                        <p className="text-white mb-2 mb-md-0">
                            <IoGlobeSharp size={25} />&nbsp;
                            <span>https://crms.sss.gov.ph</span>
                        </p>
                        <p className="text-white mb-2 mb-md-0">
                            <MdEmail size={25} />&nbsp;
                            <span>usssaptayo@sss.gov.ph</span>
                        </p>
                    </>
                </Container>
            </Navbar>
        </>
    );
}

export default Login;
