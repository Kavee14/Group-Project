import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Form, InputGroup, Image } from 'react-bootstrap';
import { FaChevronDown, FaSearch, FaTimes } from 'react-icons/fa'; // Import PDF icon
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';  
import icon1 from './images/sheet_14180779.png';
import './DutiesPage.css'; // Import your custom CSS

// HeaderBottom Component
function HeaderBottom() {
  return (
    <div className="header-bottom">
      <h5>Duties</h5>
    </div>
  );
}

function DutiesPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const requests = [
    { id: 1, name: 'W.A.B.C.D.Ranasinghe' },
    { id: 2, name: 'D.M.K.N.Dissanayake' },
    { id: 3, name: 'A.N.B.C.Senanayake' },
  ];

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const handleDownloadSchedule = () => alert('Downloading schedule...');
  const handleAccept = (id) => alert(`Accepted request from ID ${id}`);

  return (
    <Container fluid className="main-container">
      <Row>
        {/* Sidebar */}
        <Col lg={2}>
          <Sidebar isOpen={isSidebarOpen} />
        </Col>

        {/* Main Content Area */}
        <Col lg={isSidebarOpen ? 10 : 12} className="content-area">
          <Header toggleSidebar={toggleSidebar} />
          
          {/* Header Bottom */}
          <HeaderBottom />

            {/* Exam Duty Schedule Section */}
            <Card className="exam-duty-schedule mb-4">
              <Card.Body>
                <h2 className="section-title">Exam Duty Schedule</h2>
                <Row className="align-items-center">
                  <Col md={2}>
                    <Image src={icon1} rounded fluid />
                  </Col>
                  <Col md={8}>
                    {/* First Row for viewing the schedule */}
                    <Row className="align-items-center">
                      <Col>
                        <p style={{ display: 'inline' }}>Do you want to see the schedule?</p>
                      </Col>
                      <Col>
                        <Button variant="primary" onClick={handleDownloadSchedule} style={{ marginLeft: '10px' }}>
                          View
                        </Button>
                      </Col>
                    </Row>
                    {/* Second Row for downloading the schedule */}
                    <Row className="align-items-center">
                      <Col>
                        <p style={{ display: 'inline' }}>Do you want to download the schedule?</p>
                      </Col>
                      <Col className="d-flex align-items-center">
                        <Button variant="primary" onClick={handleDownloadSchedule} style={{ marginLeft: '10px' }}>
                          Download
                        </Button>
                        {/* Removed PDF icon from here */}
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card.Body>
            </Card>

            {/* Add Substitutes Section */}
            <Card className="add-substitute mb-4">
              <Card.Body>
                <h2 className="section-title">Add Substitutes</h2>
                <p className="center-text">
                  If you have any personal issues regarding examination duty dates, you can exchange your duty date with a colleague.
                </p>
                {/* Filter List Search Bar with Dropdown Icon on the Left and Search Icon on the Right */}
                <Form>
                  <InputGroup className="search-input-group">
                    {/* Dropdown Icon (Left) */}
                    <InputGroup.Text>
                      <FaChevronDown />
                    </InputGroup.Text>

                    {/* Search Input Field */}
                    <Form.Control
                      type="text"
                      placeholder="Search"
                      className="form-control"
                    />

                    {/* 1st Trailing Icon (Right) */}
                    <InputGroup.Text className="trailing-icon-1">
                      <FaSearch />
                    </InputGroup.Text>

                    {/* 2nd Trailing Icon (conditionally hidden) */}
                    <InputGroup.Text className="trailing-icon-2">
                      <FaTimes />
                    </InputGroup.Text>
                  </InputGroup>
                </Form>
              </Card.Body>
            </Card>

            {/* Pending Requests Section */}
            <Card className="pending-requests mb-4">
              <Card.Body>
                <h2 className="section-title">Pending Requests</h2>
                {/* Add a new card for existing requests */}
                <Card className="requests mt-3">
                  <Card.Body>
                    {requests.map(request => (
                      <Row key={request.id} className="align-items-center">
                        <Col>
                          {request.id}. {request.name} has sent a request
                        </Col>
                        <Col className="d-flex justify-content-end">
                          <Button 
                            variant="success" 
                            onClick={() => handleAccept(request.id)} 
                            style={{ marginLeft: '10px' }} // Add margin to create gap
                          >
                            Accept
                          </Button>
                        </Col>
                      </Row>
                    ))}
                  </Card.Body>
                </Card>
              </Card.Body>
            </Card>
          

          {/* Footer */}
          <Footer />  {/* Add Footer component here */}
        </Col>
      </Row>
    </Container>
  );
}

export default DutiesPage; 