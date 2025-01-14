import { Container, Navbar, Nav, Image, NavDropdown, Row, Col, Card, Button } from "react-bootstrap";
import { IoGlobeSharp } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaUser } from "react-icons/fa6";
import { RiErrorWarningFill } from "react-icons/ri";
import { IoHome } from "react-icons/io5";
import { IoInformationCircle } from "react-icons/io5";
import { SiQuicklook } from "react-icons/si";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import { GrServices } from "react-icons/gr";
import { MdOutlinePayment } from "react-icons/md";
import { IoLogOutSharp } from "react-icons/io5";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function Dashboard() {
    const [lastname, setLastname] = useState('');
    const [firstname, setFirstname] = useState('');
    const [crn, setCrn] = useState('');
    const userId = sessionStorage.getItem('user_id');
    const navigate = useNavigate();

    // const Home = () => { navigate("/"); }

    const redirect = () => {
        navigate("/memberinfo");
    }

    const logout = () => {
        sessionStorage.clear();
        navigate("/auth");
    }

    const home = () => {
        navigate("/");
    }
    
    const fetchUser = async () => {
        try {
            const response = await fetch(`http://sssbackend.test/api/userdetails/${userId}`);
            const data = await response.json();
            console.log(data);
            setCrn(data[0].crn);
            setFirstname(data[0].firstname);
            setLastname(data[0].lastname);
        } catch (error) {
            console.error("Error fetching Food data:", error);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);
    
    return(
        <>
            <Navbar className="navbar" expand="lg">
                <Container>
                    <div className="d-flex align-items-center w-100" onClick={home}>
                        <Navbar.Brand href="/" className="d-flex align-items-center">
                            <Image src="sss.png" alt="" fluid />
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="ms-auto" />
                    </div>
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <Nav className="ms-5">
                            <NavDropdown title={<FaUser size={30} style={{ color: 'white' }} />} id="basic-nav-dropdown" variant="light">
                                <NavDropdown.Item href="/memberinfo">Member Info</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className="mt-4">
                <Container className="d-flex justify-content-center">
                    <Card className="w-100 p-2">
                        <Card.Body>
                            <Card.Text className="fw-bold text-style">
                                {lastname}, {firstname}<br />
                                SS Number: {crn}<br />
                            </Card.Text>
                            <Card.Text className="text-style text-muted italic">
                                <RiErrorWarningFill size={20} />
                                Your password will expire on September 16,2024 | 
                                Your last login was on April 18, 2024 10:46:30 AM thru the SSS Website
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Container>
            </Container>

            <Container className="mb-3 mt-3">
                <Row>
                    <Col xs={12} lg={3}>
                        <Container className="d-flex flex-column gap-4">
                            <Button variant="primary" className="text-style fw-bold rounded-pill p-2 app-buttons">
                                <IoHome size={25} className="mb-2" />&nbsp;HOME
                            </Button>
                            <Button variant="primary" onClick={redirect} className="text-style fw-bold rounded-pill p-2 app-buttons">
                                <IoInformationCircle size={30} className="mb-1" />&nbsp;MEMBER INFO
                            </Button>
                            <Button variant="primary" className="text-style fw-bold rounded-pill p-2 app-buttons">
                                <SiQuicklook size={25} className="mb-1" />&nbsp;INQUIRY
                            </Button>
                            <Button variant="primary" className="text-style fw-bold rounded-pill p-2 app-buttons">
                                <FaHandsHoldingCircle size={25} className="mb-1" />&nbsp;BENEFITS
                            </Button>
                            <Button variant="primary" className="text-style fw-bold rounded-pill p-2 app-buttons">
                                <FaMoneyCheckDollar size={25} className="mb-1" />&nbsp;LOANS
                            </Button>
                            <Button variant="primary" className="text-style fw-bold rounded-pill p-2 app-buttons">
                                <GrServices size={25} className="mb-1" />&nbsp;SERVICES
                            </Button>  
                            <Button variant="primary" className="text-style fw-bold rounded-pill p-2 app-buttons">
                                <MdOutlinePayment size={25} className="mb-1" />&nbsp;PRN
                            </Button>
                            <Button variant="primary" onClick={logout} className="text-style fw-bold rounded-pill p-2 mb-3 app-buttons">
                                <IoLogOutSharp size={25} className="mb-1" />&nbsp;LOGOUT
                            </Button>
                        </Container>
                    </Col>
                    <Col>
                        <Image fluid src="carousel3.jpg" alt="" />
                    </Col>
                </Row>
            </Container>

            <Navbar bg="dark" data-bs-theme="dark" className="p-3 p-5 mt-auto">
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

export default Dashboard;
