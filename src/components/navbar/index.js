import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const MyNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
            <Navbar.Brand href="/">Danny Kimble</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/potfolio">Portfolio</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="mailto: dannykimble@me.com">Email Me</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Nav>
                    <Nav.Link href="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#memes">
                        Dank memes
      </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        // <Nav variant="tabs" defaultActiveKey="/">
        //     <Nav.Item>
        //         <Nav.Link href="/">About</Nav.Link>
        //     </Nav.Item>
        //     <Nav.Item>
        //         <Nav.Link href="/portfolio/">Portfolio</Nav.Link>
        //     </Nav.Item>
        //     <Nav.Item>
        //         <Nav.Link href="/contact/">Contact</Nav.Link>
        //     </Nav.Item>
        // </Nav>
    )
}

export default MyNavbar;