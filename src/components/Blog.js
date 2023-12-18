import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Card } from 'react-bootstrap'

function Blog() {
  return (
    <div>
     <img src='title.png'></img>
    <br/>
    <p>
    Explore our culinary creations, where each dish is a masterpiece of flavor, crafted with passion to elevate your dining experience.
    </p>
    <Row style={{padding:"50px", marginLeft:"100px", marginRight:"100px"}}>
      <Col>
      <Card style={{borderRadius:"0", boxShadow:"-3px 5px 3px 4px gray"}}>
      <Card.Img variant="top" src="blog_img1.png" />
      <Card.Body>
        <Card.Title>Spicy Burger</Card.Title>
        <Card.Text>
        Delight in our Spicy Burger — a symphony of grilled beef, jalapeños, and pepper jack cheese, embraced by a perfectly toasted bun. Elevate your taste experience with each spicy, flavorful bite!
        </Card.Text>
      </Card.Body>
    </Card>
      </Col>
      <Col>
      <Card  style={{borderRadius:"0", boxShadow:"-3px 5px 3px 4px gray"}}>
      <Card.Img variant="top" src="blog_img2.png" />
      <Card.Body>
        <Card.Title>Egg & Tosh</Card.Title>
        <Card.Text>
        Embark on a morning journey with our Egg and Tosh — a fusion of poached eggs, hollandaise sauce, and a delightful tosh topping. Experience a perfect blend of flavors in every delectable bite!
        </Card.Text>
      </Card.Body>
    </Card>
      </Col>
      <Col>
      <Card  style={{borderRadius:"0", boxShadow:"-3px 5px 3px 4px gray"}}>
      <Card.Img variant="top" src="blog_img3.png" />
      <Card.Body>
        <Card.Title>Pizza</Card.Title>
        <Card.Text>
        Indulge in pizza perfection with our artisanal creation — a thin, crispy crust adorned with premium toppings, rich tomato sauce, and gooey melted cheese. Savor the exquisite taste crafted in every slice!
        </Card.Text>
      </Card.Body>
    </Card>
      </Col>
    </Row>
    </div>
  )
}

export default Blog
