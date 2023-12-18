import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const NavBar = () => {
  return (
    <div className='body'>
    <Navbar bg="dark" expand="lg" className={styles.navbar} >
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
            <Nav.Link as={NavLink} to="/about" className={styles.navLink} style={{color:"orange"}}>
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
            <Button variant='warning' style={{borderRadius:0}}>
            Log In
            </Button>
            <Button variant='outline-light' style={{borderRadius:0}}>
            Register
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
export default NavBar;