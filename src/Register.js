import React, { useState } from 'react';
import { Form, Button, FloatingLabel, Alert, Modal, Container, Row, Col, Navbar, Image, Card} from 'react-bootstrap';
import { IoGlobeSharp } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [crn, setCrn] = useState('');
  const [lastname, setLastname] = useState('');
  const [firstname, setFirstname] = useState('');
  const [middlename, setMiddlename] = useState('');
  const [suffix, setSuffix] = useState('');
  const [dateofbirth, setDateofbirth] = useState('');
  const [emailaddress, setEmailaddress] = useState('');
  const [confirmEmailaddress, setConfirmEmailaddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [buildingname, setBuildingname] = useState('');
  const [street, setStreet] = useState('');
  const [lot_and_blockno, setLotAndBlockno] = useState('');
  const [subdivision, setSubdivision] = useState('');
  const [city_municipality, setCityMunicipality] = useState('');
  const [barangay, setBarangay] = useState('');
  const [postalcode, setPostalcode] = useState('');
  const [faddress, setFaddress] = useState('');
  const [fcity, setFcity] = useState('');
  const [fcountry, setFcountry] = useState('');
  const [fzip, setFzip] = useState('');
  const [registrationpreference, setRegistrationpreference] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [submittedData, setSubmittedData] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();
    if (emailaddress !== confirmEmailaddress) {
      alert('Email addresses do not match.');
      return;
    }
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    const formData = {
      crn,
      lastname,
      firstname,
      middlename,
      suffix,
      dateofbirth,
      emailaddress,
      password,
      buildingname,
      street,
      lot_and_blockno,
      subdivision,
      city_municipality,
      barangay,
      postalcode,
      faddress,
      fcity,
      fcountry,
      fzip,
      registrationpreference,
    };
    setSubmittedData(formData);
    setShowModal(true);
  };

  const handleConfirmSubmit = () => {
    fetch('http://sssbackend.test/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submittedData),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    setCrn('');
    setLastname('');
    setFirstname('');
    setMiddlename('');
    setSuffix('');
    setDateofbirth('');
    setEmailaddress('');
    setConfirmEmailaddress('');
    setPassword('');
    setConfirmPassword('');
    setBuildingname('');
    setStreet('');
    setLotAndBlockno('');
    setSubdivision('');
    setCityMunicipality('');
    setBarangay('');
    setPostalcode('');
    setFaddress('');
    setFcity('');
    setFcountry('');
    setFzip('');
    setRegistrationpreference('');
    setErrorMessage('');
    setShowModal(false);
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
        </Container>
      </Navbar>
      <Container className='d-flex justify-content-center mb-4 mt-5'>
        <h4 className="mb-3 text-style fw-bold text-muted">Please provide the following Information as reported to the Social Security System</h4>
      </Container>
      <Container>
        <Card className="p-5 login-card mt-2 mb-5">
          <Card.Body>
            <Container>
              <Form onSubmit={handleSubmit}>
                <h5 className="mb-3 text-style fw-bold">PERSONAL INFORMATION</h5>
                <Row>
                  <Col xs={12} md={4}>
                    <FloatingLabel controlId="crn" label="CRN/SS Number" className="mb-3">
                      <Form.Control
                        type="text"
                        value={crn}
                        onChange={(e) => setCrn(e.target.value)}
                        required
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={4}>
                    <FloatingLabel controlId="lastname" label="Last Name" className="mb-3">
                      <Form.Control
                        type="text"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        required
                      />
                    </FloatingLabel>
                  </Col>
                  <Col xs={12} sm={4}>
                    <FloatingLabel controlId="firstname" label="First Name" className="mb-3">
                      <Form.Control
                        type="text"
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                        required
                      />
                    </FloatingLabel>
                  </Col>
                  <Col xs={12} sm={4}>
                    <FloatingLabel controlId="middlename" label="Middle Name" className="mb-3">
                      <Form.Control
                        type="text"
                        value={middlename}
                        onChange={(e) => setMiddlename(e.target.value)}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={6}>
                    <FloatingLabel controlId="suffix" label="Suffix" className="mb-3">
                      <Form.Control
                        type="text"
                        value={suffix}
                        onChange={(e) => setSuffix(e.target.value)}
                      />
                    </FloatingLabel>
                  </Col>
                  <Col xs={12} sm={6}>
                    <FloatingLabel controlId="dateofbirth" label="Date of Birth" className="mb-3">
                      <Form.Control
                        type="date"
                        value={dateofbirth}
                        onChange={(e) => setDateofbirth(e.target.value)}
                        required
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <h5 className="mb-3 mt-3 text-style fw-bold">CREDENTIALS</h5>
                <Row>
                  <Col xs={12} sm={6}>
                    <FloatingLabel controlId="emailaddress" label="Email Address" className="mb-3">
                      <Form.Control
                        type="email"
                        value={emailaddress}
                        onChange={(e) => setEmailaddress(e.target.value)}
                        required
                      />
                    </FloatingLabel>
                  </Col>
                  <Col xs={12} sm={6}>
                    <FloatingLabel controlId="confirmEmailaddress" label="Confirm Email Address" className="mb-3">
                      <Form.Control
                        type="email"
                        value={confirmEmailaddress}
                        onChange={(e) => setConfirmEmailaddress(e.target.value)}
                        required
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={6}>
                    <FloatingLabel controlId="password" label="Password" className="mb-3">
                      <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </FloatingLabel>
                  </Col>
                  <Col xs={12} sm={6}>
                    <FloatingLabel controlId="confirmPassword" label="Confirm Password" className="mb-3">
                      <Form.Control
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <h5 className="mb-3 mt-3 text-style fw-bold">MAILING ADDRESS (PHILIPPINE ADDRESS)</h5>
                <Row>
                  <Col xs={12} sm={6}>
                    <FloatingLabel controlId="buildingname" label="Building Name" className="mb-3">
                      <Form.Control
                        type="text"
                        value={buildingname}
                        onChange={(e) => setBuildingname(e.target.value)}
                      />
                    </FloatingLabel>
                  </Col>
                  <Col xs={12} sm={6}>
                    <FloatingLabel controlId="street" label="Street" className="mb-3">
                      <Form.Control
                        type="text"
                        value={street}
                        onChange={(e) => setStreet(e.target.value)}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={6}>
                    <FloatingLabel controlId="lot_and_blockno" label="Lot and Block No" className="mb-3">
                      <Form.Control
                        type="text"
                        value={lot_and_blockno}
                        onChange={(e) => setLotAndBlockno(e.target.value)}
                      />
                    </FloatingLabel>
                  </Col>
                  <Col xs={12} sm={6}>
                    <FloatingLabel controlId="subdivision" label="Subdivision" className="mb-3">
                      <Form.Control
                        type="text"
                        value={subdivision}
                        onChange={(e) => setSubdivision(e.target.value)}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={4}>
                    <FloatingLabel controlId="city_municipality" label="City/Municipality" className="mb-3">
                      <Form.Control
                        type="text"
                        value={city_municipality}
                        onChange={(e) => setCityMunicipality(e.target.value)}
                        required
                      />
                    </FloatingLabel>
                  </Col>
                  <Col xs={12} sm={4}>
                    <FloatingLabel controlId="barangay" label="Barangay" className="mb-3">
                      <Form.Control
                        type="text"
                        value={barangay}
                        onChange={(e) => setBarangay(e.target.value)}
                        required
                      />
                    </FloatingLabel>
                  </Col>
                  <Col xs={12} sm={4}>
                    <FloatingLabel controlId="postalcode" label="Postal Code" className="mb-3">
                      <Form.Control
                        type="text"
                        value={postalcode}
                        onChange={(e) => setPostalcode(e.target.value)}
                        required
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <h5 className="mb-3 mt-3 text-style fw-bold">FOREIGN MAILING ADDRESS (OPTIONAL)</h5>
                <Row>
                  <Col xs={12} sm={6}>
                    <FloatingLabel controlId="faddress" label="Foreign Address" className="mb-3">
                      <Form.Control
                        type="text"
                        value={faddress}
                        onChange={(e) => setFaddress(e.target.value)}
                      />
                    </FloatingLabel>
                  </Col>
                  <Col xs    ={12} sm={6}>
                    <FloatingLabel controlId="fcity" label="Foreign City" className="mb-3">
                      <Form.Control
                        type="text"
                        value={fcity}
                        onChange={(e) => setFcity(e.target.value)}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <Row>
                  <Col xs={12} sm={6}>
                    <FloatingLabel controlId="fcountry" label="Foreign Country" className="mb-3">
                      <Form.Control
                        type="text"
                        value={fcountry}
                        onChange={(e) => setFcountry(e.target.value)}
                      />
                    </FloatingLabel>
                  </Col>
                  <Col xs={12} sm={6}>
                    <FloatingLabel controlId="fzip" label="Foreign Zip" className="mb-3">
                      <Form.Control
                        type="text"
                        value={fzip}
                        onChange={(e) => setFzip(e.target.value)}
                      />
                    </FloatingLabel>
                  </Col>
                </Row>
                <FloatingLabel controlId="floatingRegistrationPreference" label="Registration Preference">
                  <Form.Select value={registrationpreference} onChange={(e) => setRegistrationpreference(e.target.value)}>
                    <option value="">Select Registration Preference</option>
                    <option value="Savings Account Number">Savings Account Number</option>
                    <option value="Citibank Cash Card">Citibank Cash Card</option>
                    <option value="UBP Quick Card">UBP Quick Card</option>
                    <option value="UMID - ATM Saving Account Number Registered in SSS">UMID - ATM Saving Account Number Registered in SSS</option>
                    <option value="Mobile Number Registered in SSS">Mobile Number Registered in SSS</option>
                    <option value="UMID CARD">UMID CARD</option>
                    <option value="Employer ID Number / Household Employer ID Number">Employer ID Number / Household Employer ID Number</option>
                    <option value="Paid Payment Reference Number / SBR No. / Payment Receipt Transaction Number">Paid Payment Reference Number / SBR No. / Payment Receipt Transaction Number</option>
                    <option value="Date of Loan with Existing Loan Balance">Date of Loan with Existing Loan Balance</option>
                    <option value="Transaction Number shown in your Personal Record/Unified Multi-Purpose ID (UMID) Application (E-1/E-6)">Transaction Number shown in your Personal Record/Unified Multi-Purpose ID (UMID) Application (E-1/E-6)</option>
                    <option value="Check Number of any monthly pension of retiree/disability pensioner who is receiving the pension benefit through check">Check Number of any monthly pension of retiree/disability pensioner who is receiving the pension benefit through check</option>
                  </Form.Select>
                </FloatingLabel>
                <Container className='d-flex justify-content-center mt-5'>
                  <Col xs={12} sm={6} md={3}>
                    <Button className="p-3 fw-bold text-style w-100 app-buttons" variant="primary" type="submit">
                      Register
                    </Button>
                  </Col>
                </Container>
              </Form>
            </Container>
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
      
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg">
        <Modal.Header closeButton>
          <Modal.Title className='text-style fw-bold'>CONFIRM REGISTRATION</Modal.Title>
        </Modal.Header>
        <Modal.Body className='p-5'>
          <Row>
            <Col>
              <p className='text-style'><span className='fw-bold'>CRN:</span> {submittedData.crn}</p>
              <p className='text-style'><span className='fw-bold'>Lastname:</span> {submittedData.lastname}</p>
              <p className='text-style'><span className='fw-bold'>Firstname:</span> {submittedData.firstname}</p>
              <p className='text-style'><span className='fw-bold'>Middlename:</span> {submittedData.middlename}</p>
              <p className='text-style'><span className='fw-bold'>Suffix:</span> {submittedData.suffix}</p>
              <p className='text-style'><span className='fw-bold'>Date of Birth:</span> {submittedData.dateofbirth}</p>
              <p className='text-style'><span className='fw-bold'>Email Address: </span>{submittedData.emailaddress}</p>
              <p className='text-style'><span className='fw-bold'>Building Name:</span> {submittedData.buildingname}</p>
              <p className='text-style'><span className='fw-bold'>Street: </span>{submittedData.street}</p>
              <p className='text-style'><span className='fw-bold'>Lot and Block No.:</span> {submittedData.lot_and_blockno}</p>
            </Col>
            <Col>
              <p className='text-style'><span className='fw-bold'>Subdivision: </span>{submittedData.subdivision}</p>
              <p className='text-style'><span className='fw-bold'>City/Municipality:</span> {submittedData.city_municipality}</p>
              <p className='text-style'><span className='fw-bold'>Barangay:</span> {submittedData.barangay}</p>
              <p className='text-style'><span className='fw-bold'>Postal Code: </span>{submittedData.postalcode}</p>
              <p className='text-style'><span className='fw-bold'>Foreign Address:</span> {submittedData.faddress}</p>
              <p className='text-style'><span className='fw-bold'>Foreign City:</span> {submittedData.fcity}</p>
              <p className='text-style'><span className='fw-bold'>Foreign Country: </span>{submittedData.country}</p>
              <p className='text-style'><span className='fw-bold'>Foreign Zip Code:</span> {submittedData.fzip}</p>
              <p className='text-style'><span className='fw-bold'>Registration Preference:</span> {submittedData.registrationpreference}</p>
            </Col>
          </Row>
          <Container className='d-flex justify-content-center gap-3 mt-5'>
            <Button variant="outline-secondary" onClick={() => setShowModal(false)} className="p-3 fw-bold text-style w-25">Cancel</Button>
            <Button variant="primary" onClick={handleConfirmSubmit} className="p-3 fw-bold text-style w-25 app-buttons">Confirm</Button>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}
    
    export default Register;
    