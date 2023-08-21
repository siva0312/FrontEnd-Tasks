import React from "react";
import { Col, Row } from "react-bootstrap";
import { Carousel } from 'react-bootstrap';


const Home = () => {
  return (
      <Row className="justify-content-center align-items-center">
        <Col lg={12}>
          <Carousel>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("./img/bike5.jpg")}
                alt="First slide"
                height="539vh"
                fluid
              />
              <Carousel.Caption>
                <h3>Harley Davidson</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("./img/bike2.jpg")}
                alt="First slide"
                height="539vh"
                fluid
              />
              <Carousel.Caption>
                <h3>Yamaha</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("./img/bike3.jpg")}
                alt="Second slide"
                height="539vh"
                fluid
              />

              <Carousel.Caption>
                <h3>KTM</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("./img/bike4.jpg")}
                alt="Third slide"
                height="539vh"
                fluid
              />

              <Carousel.Caption>
                <h3>Kawaski Ninja</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
  );
};

export default Home;