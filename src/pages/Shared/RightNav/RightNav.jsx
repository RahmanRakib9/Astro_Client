import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub, FaFacebook, FaInstagram, FaTwitter, FaGithubAlt, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./RightNav.css"

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
                    <a href="https://www.facebook.com/RahmanRakibb"><ListGroup.Item ><FaFacebook /> Facebook </ListGroup.Item></a>
                    <a href="https://www.linkedin.com/in/rahmanrakib9/"><ListGroup.Item ><FaLinkedin /> Linkedin </ListGroup.Item></a>
                    <a href="https://github.com/RahmanRakib9"><ListGroup.Item ><FaGithub /> Github</ListGroup.Item></a>
                    <a href="https://www.instagram.com/rahman_rakib9/"><ListGroup.Item ><FaInstagram /> Instagram</ListGroup.Item></a>
                    <a href="https://twitter.com/RahmanRakib10"><ListGroup.Item ><FaTwitter /> Twitter</ListGroup.Item></a>

                </ListGroup>
            </div>
        </section>
    );
};

export default RightNav;