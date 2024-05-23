import { Navbar, Container, Button, Image, Nav, Carousel, Card, Row, Col } from "react-bootstrap";
import { GrLinkNext } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Home() {
    const navigate = useNavigate();
    const redirect = () => { navigate("/auth"); }

    return (
        <>
            <Navbar expand="lg" className="navbar">
                <Container>
                    <Navbar.Brand href="#home">
                    <Image src="sss.png" alt="" fluid />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="me-auto"></Nav>
                    <Nav className="d-lg-flex flex-column flex-lg-row">
                        <Nav.Link href="#features" className="fw-bold text-white fs-5 text-style mb-lg-0 mb-3">Download</Nav.Link>
                        <Button onClick={redirect} variant="light" className="fw-bold text-color text-style">
                            Register Now &nbsp;
                        <GrLinkNext />
                        </Button>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container className="d-flex justify-content-evenly mt-4 flex-wrap text-center">
                <span className="text-color text-style fw-bold m-2">ABOUT SSS</span>
                <span className="text-color text-style fw-bold m-2">MEMBERS & COVERAGE</span>
                <span className="text-color text-style fw-bold m-2">NEWS</span>
                <span className="text-color text-style fw-bold m-2">LAWS & CIRCULARS</span>
                <span className="text-color text-style fw-bold m-2">PROCUREMENT</span>
                <span className="text-color text-style fw-bold m-2">CAREER OPPORTUNITIES</span>
            </Container>

            <Container className="mt-4">
                <Carousel className="w-100">
                    <Carousel.Item>
                    <Image src="carousel-2.jpg" alt="" fluid className="w-100" style={{objectFit: 'cover', maxHeight: '550px'}} />
                    </Carousel.Item>
                    <Carousel.Item>
                    <Image src="carousel.png" alt="" fluid className="w-100" style={{objectFit: 'cover', maxHeight: '550px'}} />
                    </Carousel.Item>
                    <Carousel.Item>
                    <Image src="carousel3.jpg" alt="" fluid className="w-100" style={{objectFit: 'cover', maxHeight: '550px'}} />
                    </Carousel.Item>
                </Carousel>
            </Container>

            <Container fluid className="mt-4 p-3 bg-container">
                <Row className="g-3">
                    <Col xs={12} md={6} lg={3}>
                        <Card className="card-color">
                            <Card.Body className="d-flex flex-column align-items-center">
                                <Card.Text className="text-style fw-bold text-white">USSSAP TAYO PORTAL</Card.Text>
                                <Button variant="outline-light" className="fw-bold mb-3">Get in Touch with Us</Button>
                                <Card.Text className="text-decoration-underline text-white">uSSSap Tayo Portal</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <Card className="card-color">
                            <Card.Body className="d-flex flex-column align-items-center">
                                <Card.Text className="text-style fw-bold text-white">APPLY FOR AN SSS ONLINE</Card.Text>
                                <Button variant="outline-light" className="fw-bold mb-3">Apply Now</Button>
                                <Card.Text className="text-decoration-underline text-white">Online Registration and Coverage</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <Card className="card-color">
                            <Card.Body className="d-flex flex-column align-items-center">
                                <Card.Text className="text-style fw-bold text-white">APPLY FOR A CSP ID NUMBER ONLINE</Card.Text>
                                <Button variant="outline-light" className="fw-bold mb-3">Apply Now</Button>
                                <Card.Text className="text-decoration-underline text-white">Contribution Subsidy Provider ID Number</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={3}>
                        <Card className="card-color">
                            <Card.Body className="d-flex flex-column align-items-center">
                                <Card.Text className="text-style fw-bold text-white">HOW TO REGISTER TO MY.SSS</Card.Text>
                                <Button variant="outline-light" className="fw-bold mb-3">Read More</Button>
                                <Card.Text className="text-decoration-underline text-white">A Guide on how to Register to My.SSS</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Container className="mt-4 mb-5 d-flex flex-wrap justify-content-center gap-2">
                <Image src="footer1.png" alt="" fluid className="footer-img" />
                <Image src="footer2.png" alt="" fluid className="footer-img" />
                <Image src="footer3.png" alt="" fluid className="footer-img" />
                <Image src="footer4.png" alt="" fluid className="footer-img" />
                <Image src="footer5.png" alt="" fluid className="footer-img" />
                <Image src="footer6.png" alt="" fluid className="footer-img" />
                <Image src="footer7.png" alt="" fluid className="footer-img" />
                <Image src="footer8.png" alt="" fluid className="footer-img" />
                <Image src="footer9.png" alt="" fluid className="footer-img" />
                <Image src="footer10.png" alt="" fluid className="footer-img" />
                <Image src="footer11.png" alt="" fluid className="footer-img" />
                <Image src="footer12.png" alt="" fluid className="footer-img" />
                <Image src="footer13.png" alt="" fluid className="footer-img" />
                <Image src="footer14.png" alt="" fluid className="footer-img" />
                <Image src="footer15.png" alt="" fluid className="footer-img" />
            </Container>

            <Navbar fixed="sticky" bg="dark" data-bs-theme="dark" className="footer-nav">
                <Container>
                    <Row className="w-100">
                        <Col xs={12} md={4}>
                            <p className="text-white">
                                <span className="fw-bold">ADDRESS</span><br /><br />
                                8521 S. Cottage<br />
                                Grove Ave.<br />
                                Chicago, IL. 60619
                            </p>
                        </Col>
                        <Col xs={12} md={4}>
                            <p className="text-white">
                                <span className="fw-bold">HOURS</span><br /><br />
                                Monday - Saturday<br />
                                5:30AM - 10:00PM<br />
                                Sunday 6:30AM - 5:00PM
                            </p>
                        </Col>
                        <Col xs={12} md={4}>
                            <p className="text-white">
                                <span className="fw-bold">CONTACT</span><br /><br />
                                ussaptayo@sss.gov.ph<br />
                                crms.sss.gov.ph<br />
                                SSS Hotline: 1455
                            </p>
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-center mt-3">
                        <div><FaFacebook size={24} />&nbsp;&nbsp;</div>
                        <div><FaTwitter size={24} />&nbsp;&nbsp;</div>
                        <div><FaInstagramSquare size={24} />&nbsp;&nbsp;</div>
                    </div>
                    <p className="text-white text-center mt-3">
                        ©Social Security Systm Homepage Copyright
                    </p>
                </Container>
            </Navbar>
        </>
    );
}

export default Home;
