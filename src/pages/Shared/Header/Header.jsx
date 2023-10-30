import React from 'react';
import logo from "../../../assets/logo.png"
import moment from 'moment';
import { Container, InputGroup, Form } from 'react-bootstrap';
import { FaSearch } from "react-icons/fa";
import Navigationbar from '../Navigationbar/Navigationbar';

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
                    <Form.Control placeholder='Please enter at least 3 characters to search...' className='text-center' />
                    <InputGroup.Text><FaSearch /></InputGroup.Text>
                </InputGroup>
            </section>

            {/* Shared navigationbar */}
            <Navigationbar></Navigationbar>
        </Container>
    );
};

export default Header;