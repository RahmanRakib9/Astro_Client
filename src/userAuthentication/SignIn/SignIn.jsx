import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import useSetTitle from '../../customHooks/SetTitle/UseSetTitle';

const SignIn = () => {

    //display dynamic title
    useSetTitle("Login");

    return (
        <Container>
            <section>
                <div>
                    <form action=""></form>
                    {/* Email Field */}
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter Your Email here" className='w-25' />
                    </Form.Group>
                    {/* Password Field */}
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Your Password here" className='w-25' />
                    </Form.Group>
                    {/* Submit Button Field */}
                    <Form.Group className="mb-3" controlId="submitBtn">
                        <Button variant='dark' size='lg' active className='w-25'>Submit</Button>
                    </Form.Group>

                </div>
            </section>
        </Container>
    );
};

export default SignIn;