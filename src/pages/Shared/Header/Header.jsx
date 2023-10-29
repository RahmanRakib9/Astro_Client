import React from 'react';
import logo from "../../../assets/logo.png"
import moment from 'moment';
import { Container, Button, Nav, Navbar, InputGroup, Form } from 'react-bootstrap';

const Header = () => {
    return (
        <Container className='mt-5'>
            {/* Top header section */}
            <section>
                <div className='text-center'>
                    <img src={logo} alt="" />
                    <p><small>Astronomy compels the soul to look upwards and leads us from one world to another.</small></p>
                    <p >{moment().format('MMMM Do YYYY')}</p>
                </div>

            </section>


            {/* Bottom header section */}
            <section>
                <InputGroup className="mb-3">
                    <InputGroup.Text></InputGroup.Text>
                    <Form.Control aria-label="Amount (to the nearest dollar)" />
                    {/* <InputGroup.Text>.00</InputGroup.Text> */}
                </InputGroup>
            </section>
        </Container>
    );
};

export default Header;