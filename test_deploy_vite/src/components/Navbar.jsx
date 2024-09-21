import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


const NavigationBar = () => {
    return (
        <Navbar bg="light" expand="lg">
            <div className="container">
                {/* Website Title */}
                <Navbar.Brand href="/">Ö Septième Miel</Navbar.Brand>

                {/* Navbar Toggle for mobile */}
                <Navbar.Toggle aria-controls="navbar-nav" />

                {/* Navbar Links */}
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#target1">A propos</Nav.Link>
                        <Nav.Link href="#target2">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    );
};

export default NavigationBar;
