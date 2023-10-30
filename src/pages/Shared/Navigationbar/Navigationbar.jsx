import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserAlt } from "react-icons/fa";


const Navigationbar = () => {
    return (

        <Navbar>
            <Container>
                <Nav className="me-auto">
                    <Nav.Link to="/">Home</Nav.Link>
                    <Nav.Link to="/">Features</Nav.Link>
                    <Nav.Link to="/">Pricing</Nav.Link>
                </Nav>

                <Nav>
                    <Button variant="dark" size="sm" style={{ marginRight: "10px" }}>Login</Button>
                    <h4 > <FaUserAlt /></h4>
                </Nav>
            </Container>
        </Navbar>

    );
};

export default Navigationbar;