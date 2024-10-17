import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom'; // Import necessary components for navigation
import NavBar1 from "../components/NavBar1";
import Footer from "../components/Footer";
import './Login.css'; // External stylesheet for styling

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ email: '', password: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const navigate = useNavigate(); // Hook for navigation

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = { email: '', password: '' };
        let hasErrors = false;

        // Email validation
        if (!email) {
            newErrors.email = 'Email is required';
            hasErrors = true;
        } else if (!emailRegex.test(email)) {
            newErrors.email = 'Please enter a valid email';
            hasErrors = true;
        }

        // Password validation
        if (!password) {
            newErrors.password = 'Password is required';
            hasErrors = true;
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters long';
            hasErrors = true;
        }

        setErrors(newErrors);

        if (!hasErrors) {
            setIsSubmitted(true);
            // Navigate to the dashboard after successful login
            navigate('/dashboard');
        }
    };

    return (
        <div className="login-page">
            <NavBar1/>
            <Container className="mt-5">
                <div className="login-container">
                    <Row className="justify-content-center">
                        <Col md={6}>
                            <div className="text-center mb-4">
                                <img src="/logo.png" alt="EMS Logo" className="logo-img"/>
                            </div>

                            <div className="text-center mb-4">
                                <h4 className="login-title1">Welcome To</h4>
                                <h2 className="login-title">Exam Duty Management System</h2>
                                <p className="login-subtitle">Please log in to your account.</p>
                            </div>

                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        isInvalid={!!errors.email}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        isInvalid={!!errors.password}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.password}
                                    </Form.Control.Feedback>
                                </Form.Group>

                                <Row>
                                    <Col md={8}>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Remember me"/>
                                        </Form.Group>
                                    </Col>

                                    <Col md={4} className="text-right">
                                        <Link to="/" className="clear-link">Do you want to clear?</Link>
                                    </Col>
                                </Row>
                                <br/>

                                <div className="d-grid gap-2">
                                    <Button variant="primary" type="submit" className="login-btn">
                                        Log In
                                    </Button>
                                </div>
                                <br/>
                            </Form>
                            <br/>
                            <div className="text-center mt-3">
                                <p style={{color: '#666666'}}>
                                    New member? <Link to="/register" className="register-link">Register Now</Link>
                                </p>
                            </div>

                            {isSubmitted && (
                                <Alert variant="success" className="mt-3">
                                    Login successful!
                                </Alert>
                            )}
                        </Col>
                    </Row><br/><br/>
                </div>
            </Container>
            <br/><br/>
            <Footer />
        </div>
    );
}

export default Login;
