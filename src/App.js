import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import routes from './components/routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';


const App = () => {
  return (
    <div className='App'>
    <Router>
       <Navbar bg="dark" expand="lg" sticky='top' className={styles.navbar}>
      <Container className={styles.navbarContainer}>
        <Navbar.Brand as={NavLink} to="/" className={styles.navLink}>
          <img src='Logo.png'>
            </img> 
            FOOD STORE </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={NavLink} to="/" className={styles.navLink}>
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className={styles.navLink}>
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/recipe" className={styles.navLink}>
              Recipe
            </Nav.Link>
            <Nav.Link as={NavLink} to="/blog" className={styles.navLink}>
              Blogs
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className={styles.navLink}>
              Contact Us
            </Nav.Link>
            <Button variant='warning' style={{borderRadius:0}} as={NavLink} to="/login" className={styles.navLink}>
            Log In
            </Button>
            <Button variant='outline' style={{borderRadius:0}}  as={NavLink} to="/register" className={styles.navLink}>
            Register
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <div className="container-fluid p-0">
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.component} />
          ))}
        </Routes>
      </div>
    </Router>
    </div>
    
  );
};

export default App;