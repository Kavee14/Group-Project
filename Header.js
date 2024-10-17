import React from 'react';
import { Navbar, Button } from 'react-bootstrap'; 
import './Header.css';  

function Header({ toggleSidebar, isSidebarOpen }) {
  return (
    <Navbar className="header" expand="lg">
      <Button variant="primary" onClick={toggleSidebar}>
        ☰
      </Button>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>A.B.C.D.Samarasinghe</Navbar.Text>
        {/* Replacing the Image with a styled vector div */}
        <div className="profile-vector"></div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
