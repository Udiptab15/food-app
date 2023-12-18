import React, { useState } from 'react';
import { Form, Button, FormControl, Row, Col } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        username: '',
        password: '',
        confirmPassword: '',
    });

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log(values);
        if (values.password !== values.confirmPassword) {
            console.error('Error: Passwords do not match');
            document.getElementById('error-message').innerHTML =
                'Error: Passwords do not match';
            return;
        }

        try {
            await axios.post('https://httpbin.org/post', values);
            alert('Thank you for registering with us!');
            navigate('/');
        } catch (error) {
            alert('We are facing some issues. Please try again later');
        }
    };

    return (
        <div
            className="container"
            style={{
                padding: '180px',
                backgroundImage: 'url(register.png)',
                backgroundColor: 'black',
            }}
        >
            <Form
                onSubmit={handleSubmit}
                style={{
                    backgroundColor: 'whitesmoke',
                    padding: '50px',
                    boxShadow: '-3px 5px 3px 4px black',
                }}
            >
                <Row>
                    <Col xs={12}>
                        <Form.Group controlId="formUsername">
                            <Form.Label>Username:</Form.Label>
                            <FormControl
                                type="text"
                                name="username"
                                value={values.username}
                                onChange={handleChange}
                                style={{ width: '100%' }}
                                required
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Form.Group controlId="formPassword">
                            <Form.Label>Password:</Form.Label>
                            <div className="input-group">
                                <FormControl
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={values.password}
                                    onChange={handleChange}
                                    required
                                />
                                <span
                                    onClick={togglePasswordVisibility}
                                    className="eye-icon"
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                                </span>
                            </div>
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Form.Group controlId="formConfirmPassword">
                            <Form.Label>Confirm Password:</Form.Label>
                            <div className="input-group">
                                <FormControl
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    name="confirmPassword"
                                    value={values.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                                <span
                                    onClick={toggleConfirmPasswordVisibility}
                                    className="eye-icon"
                                >
                                    {showConfirmPassword ? (
                                        <FaEyeSlash />
                                    ) : (
                                        <FaEye />
                                    )}
                                </span>
                            </div>
                        </Form.Group>
                    </Col>
                </Row>
                <br />
                <div style={{ marginTop: '20px' }}>
                    <Button variant="warning" type="submit">
                        Submit
                    </Button>
                </div>
                <div id="error-message" style={{ color: 'red', marginTop: '10px' }}></div>
            </Form>
        </div>
    );
};

export default Register;
