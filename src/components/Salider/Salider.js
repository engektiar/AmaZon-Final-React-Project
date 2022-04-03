import React from 'react';
import {Carousel} from "react-bootstrap";
import banner from "../../images/banner.jpg"
import banner2 from "../../images/banner2.jpg";
import banner3 from "../../images/banner3.jpg";
import "./Salider.css";
const Salider = () => {
  return (
    <div>
    <Carousel className='salider'>
     <Carousel.Item>
    <img
      className="d-block w-100 saliderImg"
      src={banner3}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First ordeer 20% free</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 saliderImg"
      src={banner}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3> 24 April 50% off</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 saliderImg"
      src={banner2}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Add to Card All Product 10% off </h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  );
};

export default Salider;