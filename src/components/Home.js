import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Home() {
    const navigate = useNavigate();

    const handleOrderNowClick = () => {
        alert("You must login to order!");
        navigate('/login');
    };

    return (
        <div>
            <Row style={{ backgroundColor: "#000", padding: '120px' }}>
                <Col>
                    <p style={{ color: "#fff", padding: '80px', marginTop: '70px' }}>
                        <h1>
                            Discover Restaurants that deliver near you
                        </h1>
                        <p>
                            Explore a world of mouth-watering recipes, handpicked for you. From gourmet classics to quick and easy meals, Food Store brings the joy of cooking to your kitchen. Order fresh ingredients, embark on a culinary adventure, and savor the flavors of homemade perfection.
                        </p>
                        <Button variant='outline-light' style={{ borderRadius: 0 }} onClick={handleOrderNowClick}>
                            Order Now
                        </Button>
                    </p>
                </Col>
                <Col>
                    <p style={{ color: "#fff", padding: '10px', marginTop: '40px' }}>
                        <img src='burger_slide.png' alt="Burger" width={500} height={500} />
                    </p>
                </Col>
            </Row>
        </div>
    );
}

export default Home;