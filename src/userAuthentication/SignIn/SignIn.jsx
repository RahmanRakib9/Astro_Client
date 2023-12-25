import  { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import useSetTitle from '../../customHooks/SetTitle/UseSetTitle';
import { UserAuthenticationContext } from '../../provider/UserAuthenticationProvider/UserAuthenticationProvider';

const SignIn = () => {
    const { handlePasswordSignIn } = useContext(UserAuthenticationContext); //use global context

    //display dynamic title
    useSetTitle("Login");

    //handle form submission & signIn an existing user
    const handleFormSubmission = (event) => {
        event.preventDefault(); //prevent form default behaviour

        console.log("clicked");

        const userEmail = event.target.email.value;
        const userPassword = event.target.password.value;

        handlePasswordSignIn(userEmail, userPassword)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })

        // console.log(userName);

    }

    return (
        <Container>
            <section>
                <div>
                    <Form action="" onSubmit={handleFormSubmission}>

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
                            <Button variant='dark' type='submit' size='lg' active className='w-25'>Submit</Button>
                        </Form.Group>

                    </Form>
                </div>
            </section>
        </Container>
    );
};

export default SignIn;