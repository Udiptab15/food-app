import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const users = {
  'user1': 'password1',
  'user2': 'password2',
  'user3': 'password3',
  'user4': 'password4',
  'user5': 'password5',
  'user6': 'password6'
};

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setError('Please enter a username and password.');
      return;
    }

    if (!users[username] || users[username] !== password) {
      setError('Invalid username or password.');
      return;
    }

    alert(`Welcome ${username}`);
    setError('');
    navigate('/');
  };

  const handleRegisterClick = () => {
    navigate('/register');
  };

  return (
    <div style={{ backgroundImage: "url(bg.jpg)" }}>
      <Container style={{ padding: "200px" }}>
        <Row>
          <Col md="auto" className="mx-auto">
            <Form onSubmit={handleSubmit} style={{ boxShadow: "-3px 5px 3px 4px rgb(216, 176, 15)", padding: "30px" }}>
              <Form.Group controlId="username" as={Col} style={{ marginBottom: "30px" }}>
                <Row>
                  <Col>
                    <Form.Label>Username</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={{ width: "300px" }} />
                  </Col>
                </Row>
              </Form.Group>

              <Form.Group controlId="password" as={Col} style={{ marginBottom: "30px" }}>
                <Row>
                  <Col>
                    <Form.Label>Password</Form.Label>
                  </Col>
                  <Col>
                    <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: "300px" }} />
                  </Col>
                </Row>
              </Form.Group>

              {error && <div><div style={{ color: "red" }}>{error}</div><br /></div>}
              <Button type="submit" variant='warning'>
                Login
              </Button>
              <br/><br/>
              <p>
                New user? Click{' '}
                <span style={{ cursor: 'pointer', color: 'blue' }} onClick={handleRegisterClick}>
                  here
                </span>{' '}
                to register.
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;