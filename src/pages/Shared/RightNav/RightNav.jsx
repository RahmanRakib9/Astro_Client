import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter, FaGithubAlt, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const RightNav = () => {
    return (
        <section>
            {/* Sign in option */}
            <h5 className=''>Login With</h5>
            <div >
                <Button variant="dark" size="lg" active>
                    <FaGoogle /> Login with Google
                </Button>
                <Button variant="dark" className='mt-2' size="lg" active>
                    <FaGithub />Login with Another
                </Button>
            </div>

            {/* Social Media option */}
            <div className='mt-3'>
                <ListGroup>
                    <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaLinkedin /> Linkedin </ListGroup.Item>
                    <ListGroup.Item><FaGithubAlt /> Github</ListGroup.Item>
                    <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
                    <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>

                </ListGroup>
            </div>
        </section>
    );
};

export default RightNav;