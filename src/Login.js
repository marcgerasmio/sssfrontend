import { Navbar, Container, Image, Nav, Button, Card, InputGroup, Form, Row, Col } from "react-bootstrap";
import { IoGlobeSharp } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillGoogleSquare } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";
import "./App.css";

function Login() {
    return (
        <>
            <Navbar className="navbar" expand="lg">
                <Container>
                    <div className="d-flex align-items-center w-100">
                        <Navbar.Brand href="#home" className="d-flex align-items-center">
                            <Image src="sss.png" alt="" fluid />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
                    </div>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="ms-5">
                            <Nav.Link href="#home" className="fw-bold text-white fs-5 text-style">Home</Nav.Link>
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
                                    <InputGroup className="mb-2">
                                        <InputGroup.Text id="basic-addon1">
                                            <FaUserAlt />
                                        </InputGroup.Text>
                                        <Form.Control
                                            placeholder="Username"
                                            aria-label="Username"
                                            aria-describedby="basic-addon1"
                                            className="p-3"
                                        />
                                    </InputGroup>
                                    <InputGroup className="mb-3">
                                        <InputGroup.Text id="basic-addon1">
                                            <RiLockPasswordFill />
                                        </InputGroup.Text>
                                        <Form.Control
                                            type="password"
                                            placeholder="Password"
                                            aria-label="Password"
                                            aria-describedby="basic-addon1"
                                            className="p-3"
                                        />
                                    </InputGroup>
                                    <div className="d-flex justify-content-center mb-4">
                                        <Button variant="primary" className="fw-bold text-style w-100 p-3">Login</Button>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <span className="text-style">Don't have an account?</span> &nbsp;
                                        <span className="text-decoration-underline text-style">Register</span>
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

            <Navbar bg="dark" data-bs-theme="dark" className="footer-nav p-3 fixed-bottom p-5">
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
