import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

import Anik from '../Anik.jpg';
import './Banner.css';
const Banner = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img className='d-block w-100 golam' src={Anik} alt='First slide' />
        <Carousel.Caption>
          <h3>Golam Kibria Anik</h3>
          <p>
            A professional photographer who will capture your best moment.I hope
            you will stay with me after this sevices too.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={Anik} alt='Second slide' />

        <Carousel.Caption>
          <h3>Golam Kibria Anik</h3>
          <p>
            A professional photographer who will capture your best moment.I hope
            you will stay with me after this sevices too.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className='d-block w-100' src={Anik} alt='Third slide' />

        <Carousel.Caption>
          <h3>Golam Kibria Anik</h3>
          <p>
            A professional photographer who will capture your best moment.I hope
            you will stay with me after this sevices too.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
