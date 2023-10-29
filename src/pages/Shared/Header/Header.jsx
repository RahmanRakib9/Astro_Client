import React from 'react';
import logo from "../../../assets/logo.png"
import moment from 'moment';
import { Container, InputGroup, Form } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";

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
                    <Form.Control placeholder='Search here' />
                    <InputGroup.Text><FaSearch /></InputGroup.Text>
                </InputGroup>
            </section>
        </Container>
    );
};

export default Header;