import React, { useState } from 'react';
import { Form, Button, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Contact = () => {
  const navigate= useNavigate();
 const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
 });

 const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
 };

 const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('https://httpbin.org/post', formData);
      alert('Thank you! We will get back to you soon!');
      navigate('/');
    } catch (error) {
      alert('Error occurred please try again later');
    }
 };

 return (
    <Row style={{backgroundColor:"rgb(216, 176, 15)"}}>
        <Col style={{ marginLeft:"150px",marginTop:"55px"}}>
    <Container>
      <Row className="justify-content-md-center">
        <Col >
        <Row>
            <Col>
          <h2 style={{marginBottom:"30px", textAlign:"right"}}>Request A</h2> 
          </Col>
          <Col>
          <h2 style={{color:"white", textAlign:"left"}}>
          Call Back
          </h2>
          </Col>
          </Row>
          <Form onSubmit={handleSubmit}>
            
          <Form.Group as={Col} controlId="formGridName" style={{marginBottom:"30px"}}>
              <Col sm={15}>
                <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" style={{borderRadius:"0", boxShadow:"-3px 5px 3px 4px chocolate"}} required/>
              </Col>
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail" style={{marginBottom:"30px"}}>
              <Col sm={15}>
                <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" style={{borderRadius:"0", boxShadow:"-3px 5px 3px 4px chocolate"}} required/>
              </Col>
           </Form.Group>
           <Form.Group as={Col} controlId="formGridPhone" style={{marginBottom:"30px"}}>
              <Col sm={15}>
                <Form.Control type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" style={{borderRadius:"0", boxShadow:"-3px 5px 3px 4px chocolate"}} required/>
              </Col>
           </Form.Group>
           <Form.Group as={Col} controlId="formGridMessage" style={{marginBottom:"30px"}}>
              <Col sm={15}>
                <Form.Control as="textarea" rows={3} name="message" value={formData.message} onChange={handleChange} placeholder="Message" style={{borderRadius:"0", boxShadow:"-3px 5px 3px 4px chocolate"}} required/>
              </Col>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridButton" style={{marginBottom:"30px",marginLeft:"-150px"}}>
            <Button type="submit" style={{backgroundColor:"white", color:"black", border:"0px", borderRadius:"0",marginRight:"10px",marginLeft:"10px",width:"100px"}}>
              Send
            </Button>
            </Form.Group> 
          </Form>
        </Col>
      </Row>
    </Container>
    </Col>
    <Col style={{padding:"30px",marginTop:"60px"}}>
    <img src='img.jpg' height={400} width={600}></img>
    </Col>
    </Row>
 );
};

export default Contact;