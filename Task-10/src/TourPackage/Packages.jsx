import React, { useState } from 'react';
import { Card, Container, Figure, Row ,Col, Accordion, Carousel,Form } from 'react-bootstrap';
import { obj ,city1,city2,city3,city4,city5,city6,city7,city8,city9,city10} from './Datapackage';
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { faHotel } from "@fortawesome/free-solid-svg-icons";
import { faVanShuttle } from "@fortawesome/free-solid-svg-icons";
import { faPersonWalkingLuggage } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Packages = () => {
  const [city,setcity]=useState(city1);
  const arr=[city1,city2,city3,city4,city5,city6,city7,city8,city9,city10]
  const handlecity=((index)=>{
    setcity(arr[index])
  });
  return (
    <Container>
      <section className='d-flex mt-5 mb-5'>
        <div className='me-3'>
        <Figure.Image 
            src={require(`../Components/Gallery/ooty2.jpeg`)}
            style={{width:'6em',height:'6em'}} 
          />
          <Figure.Image 
            src={require(`../Components/Gallery/kodaikanal2.jpeg`)}
            style={{width:'6em',height:'6em'}} 
          />
        {obj.map((item) => (
          <Figure.Image 
            src={require(`../Components/Tourimg/${item.src}`)}
            style={{width:'6em',height:'6em'}} 
          />))}
        </div>
        <div>
          <h3>Tamil Nadu Treasures</h3>
          <p style={{textIndent:'15%',textAlign:'justify'}}>
            Discover the diverse beauty of Tamil Nadu with our meticulously crafted tour package, "Tamil Nadu Treasures." From the bustling city of Chennai to the tranquil destinations of Rameshwaram, Ooty, Kodaikanal, Kumbakonam, Kanyakumari, Madurai, Theni, Yercaud, and Hogenakkal, this journey promises an unforgettable experience.
          </p>
          <p style={{textIndent:'15%',textAlign:'justify'}}>
            Explore the rich cultural heritage of Chennai, dive into the spirituality of Rameshwaram, and soak in the natural beauty of Ooty and Kodaikanal. Witness the historic allure of Kumbakonam, the southernmost tip of India in Kanyakumari, and the grandeur of Madurai's temples.
          </p>
          <p style={{textIndent:'15%',textAlign:'justify'}}>
            Venture into the pristine landscapes of Theni, the serene hills of Yercaud, and the breathtaking waterfalls of Hogenakkal. This comprehensive tour offers a perfect blend of culture, nature, and adventure.
          </p>
          <p style={{textIndent:'15%',textAlign:'justify'}}>
            Join us on the "Tamil Nadu Treasures" tour and create lasting memories in the land of temples, hills, and cascading waters. Explore, experience, and embrace the wonders of Tamil Nadu with us!
          </p>
        </div>
      </section>
      <Row>
        {obj.map((item, index) => (
          <Col md={12}>
              <Card className='maincard m-3' key={index}>
                <Card.Body className='d-flex'>
                  <Figure.Image 
                    src={require(`../Components/Tourimg/${item.src}`)}
                    style={{width:'20em',height:'13em'}} 
                  />
                  <Card.Text className='m-2 ms-5'>
                    <span style={{fontSize:'1.9em',color:'orangered',fontWeight:'bold'}}>
                      {item.place} To Enchanting Destinations
                    </span>
                    <p className='m-3' style={{textAlign:'justify',textIndent:'15%'}}>
                      {item.para}
                    </p>
                  </Card.Text>
                </Card.Body>
                  <Accordion onClick={()=>handlecity(index)}>
                    <Accordion.Item eventKey='0'>
                      <Accordion.Header>
                        <span style={{fontSize:'1.3em',color:'darkgreen',fontWeight:'bold'}}>
                          Departure : {item.place}</span>
                      </Accordion.Header>
                      <Accordion.Body>
                        <Carousel>
                          {(city).map((data) => (
                              <Carousel.Item>
                                <Row>
                                  {data.map((value,index1)=>(
                                    <Col md={4}>
                                      <Card key={index1} className='cardalign'>
                                        <img 
                                          src={require(`../Components/Gallery/${value.src}`)}
                                          style={{width:'21em',height:'12em'}}>
                                        </img>   
                                        <Card.Body>
                                        <div>
                                          <h5><FontAwesomeIcon icon={faLocationDot} style={{color:'skyblue'}}/> 
                                            {" "+item.place}-{value.place}
                                          </h5>
                                          <h6 style={{color:'orangered'}}>{value.days}</h6>
                                          <h5>Total Amount: {value.amt}</h5>
                                        </div>
                                        <h6>Time: {value.time}</h6>
                                        <Row>
                                          <Col><FontAwesomeIcon icon={faUtensils} /><br /> Food</Col>
                                          <Col><FontAwesomeIcon icon={faHotel} /><br /> Hotel</Col>
                                          <Col><FontAwesomeIcon icon={faVanShuttle} /><br /> Travel</Col>          
                                          <Col><FontAwesomeIcon icon={faPersonWalkingLuggage} /><br /> Luggage</Col>          
                                        </Row>
                                        </Card.Body>
                                      </Card>
                                    </Col>
                                  ))}
                                </Row>
                              </Carousel.Item>
                            ))}
                        </Carousel>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
              </Card>
          </Col>
        ))}
      </Row>
      <Row className='justify-content-center'>
      <Card style={{width:'50em'}} className='formcard'>
      <Card.Body>
        <Card.Title className='text-center'>Tour Details</Card.Title>
        <Form>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group><br></br>
          <Form.Group controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter your email" />
          </Form.Group><br></br>
          <Form.Group controlId="phone">
            <Form.Label>Phone</Form.Label>
            <Form.Control type="tel" placeholder="Enter your phone number" />
          </Form.Group><br></br>
          <Form.Group controlId="tourType">
            <Form.Label >Tour Type</Form.Label>
            <Form.Control as="select">
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
            </Form.Control>
          </Form.Group><br></br>
          <Form.Group controlId="comments">
            <Form.Label>Comments</Form.Label>
            <Form.Control as="textarea" rows={4} placeholder="Enter your comments" />
          </Form.Group>
        </Form>
      </Card.Body>
    </Card>
      </Row>
    </Container>
  );
}
export default Packages;
