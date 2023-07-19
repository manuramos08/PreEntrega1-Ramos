import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from "../../assets/logo.png"
import CartWidget from './CartWidget';


function NavBar() {
    return (
        <Navbar expand="lg" className="custom-navbar" variant="dark">
            <Container className="divContainer">
                <Navbar.Brand href="#home" className="logo-nav"><img src={Logo} alt="" className="logo" /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className="navlink" href="#home">Alguicida</Nav.Link>
                        <Nav.Link className="navlink" href="#link">Clarificadores</Nav.Link>
                        <NavDropdown title="Cloro" id="basic-nav-dropdown" className="custom-dropdown" menuVariant="dark">
                            <NavDropdown.Item className="hola" href="#action/3.1">En pastillas</NavDropdown.Item>
                            <NavDropdown.Item className="hola" href="#action/3.2">Granulado</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="navlink" href="#home">Regulador de Ph</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="#memes"><CartWidget /></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;

