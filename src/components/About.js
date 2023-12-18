import React from 'react';
import { Row, Col} from 'react-bootstrap';
import { ArrowRight } from 'react-bootstrap-icons';

function About() {
return <div style={{backgroundImage:"url(bg.jpg)"}}>
    <img src='title.png'style={{ marginTop:'90px'}}></img>
    <br/>
    <br/>
    <p>Embark on a culinary journey with Food Store — <br/>where every recipe is a story,
     and every meal is a celebration of flavors.</p>
  <Row style={{ padding:'40px', marginRight:'70px',marginLeft:'70px', boxShadow:"-3px 5px 3px 4px rgb(216, 176, 15)"}}>
       <Col style={{backgroundColor: "#000",color: "#fff", padding:'80px'}}>
       <h3 style={{textAlign:"center"}}>Best Food</h3>
       <br/>
        <p style={{textAlign:"justify"}}>At Food Store, we're passionate about creating a unique culinary experience. Explore our carefully curated recipes, order ingredients effortlessly, and join a community that celebrates the joy of good food. Committed to quality, freshness, and sustainability, we invite you to be a part of the Food Store family. Cheers to delicious meals, memorable moments, and a journey where every recipe tells a story!</p>
        <a href="#" style={{color:"white"}}>
        Read More 
       <ArrowRight/>
        </a>

       </Col>
       <Col style={{marginTop:'160px',boxShadow:""}}>
       <img src='about-img.jpg' alt='img'height={320} width={400} style={{boxShadow: "rgb(216, 176, 15) -15px -15px 0px 40px"}}></img>
       </Col>
    </Row>
</div>;
}
export default About;