import React, { useEffect, useState } from "react";
import { Form, FloatingLabel, Row, Col, Container, Button, Navbar, Nav, NavDropdown, Image, Card} from 'react-bootstrap';
import { FaUser } from "react-icons/fa6";
import { IoGlobeSharp } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const MemberInfo = () => {
    const userId = sessionStorage.getItem('user_id');
    const navigate = useNavigate();
    const [barangay, setBarangay] = useState("");
    const [buildingName, setBuildingName] = useState("");
    const [cityMunicipality, setCityMunicipality] = useState("");
    const [crn, setCrn] = useState("");
    const [dateOfBirth, setDateOfBirth] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [fAddress, setFAddress] = useState("");
    const [fCity, setFCity] = useState("");
    const [fCountry, setFCountry] = useState("");
    const [firstName, setFirstName] = useState("");
    const [fZip, setFZip] = useState("");
    const [lastName, setLastName] = useState("");
    const [lotAndBlockNo, setLotAndBlockNo] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [registrationPreference, setRegistrationPreference] = useState("");
    const [street, setStreet] = useState("");
    const [subdivision, setSubdivision] = useState("");
    const [suffix, setSuffix] = useState("");

    const cancel = () => { navigate("/dashboard"); }
    const home = () => { navigate("/"); }
    const logout = () => {
        sessionStorage.clear();
        navigate("/auth");
    }

    const fetchUser = async () => {
        try {
            const response = await fetch(`http://sssbackend.test/api/userdetails/${userId}`);
            const data = await response.json();
            console.log(data);
            setBarangay(data[0].barangay);
            setBuildingName(data[0].buildingname);
            setCityMunicipality(data[0].city_municipality);
            setCrn(data[0].crn);
            setDateOfBirth(data[0].dateofbirth);
            setEmailAddress(data[0].emailaddress);
            setFAddress(data[0].faddress);
            setFCity(data[0].fcity);
            setFCountry(data[0].fcountry);
            setFirstName(data[0].firstname);
            setFZip(data[0].fzip);
            setLastName(data[0].lastname);
            setLotAndBlockNo(data[0].lot_and_blockno);
            setMiddleName(data[0].middlename);
            setPostalCode(data[0].postalcode);
            setRegistrationPreference(data[0].registrationpreference);
            setStreet(data[0].street);
            setSubdivision(data[0].subdivision);
            setSuffix(data[0].suffix);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const update = async () => {
        try {
          const response = await fetch(`http://sssbackend.test/api/update/${userId}`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                crn:crn,
                lastname:lastName,
                firstname:firstName,
                middlename:middleName,
                suffix:suffix,
                dateofbirth:dateOfBirth,
                emailaddress:emailAddress,
                buildingname:buildingName,
                street:street,
                lot_and_blockno:lotAndBlockNo,
                subdivision:subdivision,
                city_municipality:cityMunicipality,
                barangay:barangay,
                postalcode:postalCode,
                faddress:fAddress,
                fcity:fCity,
                fcountry:fCountry,
                fzip:fZip,
                registrationpreference:registrationPreference,
            }),
          });
            const data = response.json();
            console.log(data);
            alert("update profile successful!");
            navigate("/dashboard");
        } catch (error) {
            alert("Submission failed. Please try again.");
            console.error('Error submitting:', error.message);
        }
    };

    return (
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

            <Container>
                <Card className="p-5 login-card mt-4 mb-5">
                    <Card.Body>
                        <Form>
                            <h5 className="mb-3 text-style fw-bold">PERSONAL DETAILS</h5>
                            <Row className="mb-3">
                                <Col xs={12} md={4}>
                                <FloatingLabel controlId="floatingCrn" label="CRN">
                                    <Form.Control type="text" placeholder="CRN" value={crn} onChange={(e) => setCrn(e.target.value)} />
                                </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col xs={12} sm={6} md={4}>
                                <FloatingLabel controlId="floatingLastName" label="Last Name">
                                    <Form.Control type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                                </FloatingLabel>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                <FloatingLabel controlId="floatingFirstName" label="First Name">
                                    <Form.Control type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                                </FloatingLabel>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                <FloatingLabel controlId="floatingMiddleName" label="Middle Name">
                                    <Form.Control type="text" placeholder="Middle Name" value={middleName} onChange={(e) => setMiddleName(e.target.value)} />
                                </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col xs={12} sm={6} md={4}>
                                <FloatingLabel controlId="floatingSuffix" label="Suffix">
                                    <Form.Control type="text" placeholder="Suffix" value={suffix} onChange={(e) => setSuffix(e.target.value)} />
                                </FloatingLabel>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                <FloatingLabel controlId="floatingDateOfBirth" label="Date of Birth">
                                    <Form.Control type="text" placeholder="Date of Birth" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
                                </FloatingLabel>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                <FloatingLabel controlId="floatingEmailAddress" label="Email Address">
                                    <Form.Control type="email" placeholder="Email Address" value={emailAddress} onChange={(e) => setEmailAddress(e.target.value)} />
                                </FloatingLabel>
                                </Col>
                            </Row>

                            <h5 className="mb-3 mt-4 text-style fw-bold">Mailing Address (Philippine Address)</h5>
                            <Row className="mt-3 mb-3">
                                <Col xs={12} sm={6} md={4}>
                                <FloatingLabel controlId="floatingBuildingName" label="Building Name">
                                    <Form.Control type="text" placeholder="Building Name" value={buildingName} onChange={(e) => setBuildingName(e.target.value)} />
                                </FloatingLabel>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                <FloatingLabel controlId="floatingLotAndBlockNo" label="Lot And Block No">
                                    <Form.Control type="text" placeholder="Lot And Block No" value={lotAndBlockNo} onChange={(e) => setLotAndBlockNo(e.target.value)} />
                                </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col xs={12} sm={6} md={4}>
                                <FloatingLabel controlId="floatingStreet" label="Street">
                                    <Form.Control type="text" placeholder="Street" value={street} onChange={(e) => setStreet(e.target.value)} />
                                </FloatingLabel>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                <FloatingLabel controlId="floatingSubdivision" label="Subdivision">
                                    <Form.Control type="text" placeholder="Subdivision" value={subdivision} onChange={(e) => setSubdivision(e.target.value)} />
                                </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col xs={12} sm={6} md={4}>
                                <FloatingLabel controlId="floatingCityMunicipality" label="City/Municipality">
                                    <Form.Control type="text" placeholder="City/Municipality" value={cityMunicipality} onChange={(e) => setCityMunicipality(e.target.value)} />
                                </FloatingLabel>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                <FloatingLabel controlId="floatingBarangay" label="Barangay">
                                    <Form.Control type="text" placeholder="Barangay" value={barangay} onChange={(e) => setBarangay(e.target.value)} />
                                </FloatingLabel>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                <FloatingLabel controlId="floatingPostalCode" label="Postal Code">
                                    <Form.Control type="text" placeholder="Postal Code" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} />
                                </FloatingLabel>
                                </Col>
                            </Row>

                            <h5 className="mb-3 mt-4 text-style fw-bold">Foreign Mailing Address</h5>
                            <Row className="mt-3 mb-3">
                                <Col xs={12} sm={6} md={4}>
                                <FloatingLabel controlId="floatingFAddress" label="Address">
                                    <Form.Control type="text" placeholder="F Address" value={fAddress} onChange={(e) => setFAddress(e.target.value)} />
                                </FloatingLabel>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                <FloatingLabel controlId="floatingFCity" label="City">
                                    <Form.Control type="text" placeholder="F City" value={fCity} onChange={(e) => setFCity(e.target.value)} />
                                </FloatingLabel>
                                </Col>
                            </Row>
                            <Row className="mb-3">
                                <Col xs={12} sm={6} md={4}>
                                <FloatingLabel controlId="floatingFCountry" label="Country">
                                    <Form.Control type="text" placeholder="F Country" value={fCountry} onChange={(e) => setFCountry(e.target.value)} />
                                </FloatingLabel>
                                </Col>
                                <Col xs={12} sm={6} md={4}>
                                <FloatingLabel controlId="floatingFZip" label="Zip">
                                    <Form.Control type="text" placeholder="F Zip" value={fZip} onChange={(e) => setFZip(e.target.value)} />
                                </FloatingLabel>
                                </Col>
                            </Row>
                            <FloatingLabel controlId="floatingRegistrationPreference" label="Registration Preference">
                                <Form.Control type="text" placeholder="Registration Preference" value={registrationPreference} readOnly />
                            </FloatingLabel>

                            <Container className="mt-5">
                                <Row className="justify-content-center">
                                    <Col xs={12} md={6} className="mb-2 mb-md-0">
                                    <Button onClick={cancel} className="p-3 fw-bold text-style w-100" variant="outline-secondary">
                                        CANCEL
                                    </Button>
                                    </Col>
                                    <Col xs={12} md={6}>
                                    <Button onClick={update} className="p-3 fw-bold text-style w-100 app-buttons" variant="primary">
                                        UPDATE
                                    </Button>
                                    </Col>
                                </Row>
                            </Container>
                        </Form>
                    </Card.Body>
                </Card>
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
};

export default MemberInfo;
