import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import new1 from '../image/1.png';
import new2 from '../image/2.png';
import new3 from '../image/3.png';

function HomeCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={new1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={new2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={new3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default HomeCarousel;