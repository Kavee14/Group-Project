import React from 'react';
import { Nav } from 'react-bootstrap';
import './Sidebar.css'; 
import logo from './images/image.png'; 

function Sidebar({ isOpen }) {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="pl-3">
        <img src={logo} alt="EMS Logo" className="sidebar-logo" /> 
      </div>
      <Nav className="flex-column">
        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
        <Nav.Link href="/profile">Profile</Nav.Link>
        <Nav.Link href="/duties">Duties</Nav.Link>
        <Nav.Link href="/reports">Reports</Nav.Link>
      </Nav>
    </div>
  );
}

export default Sidebar;
