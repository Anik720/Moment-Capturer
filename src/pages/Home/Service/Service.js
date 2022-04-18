import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css';
const Service = ({ service, items }) => {
  const { id, name, img, price, description } = service;
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate(`/checkout/${id}`);
  };
  return (
    <div
      className='col col-lg-4 col-md-6 col-sm-12 g-5'
      data-aos='fade-down'
      data-aos-easing='linear'
      data-aos-duration='1500'>
      <Card
        style={{
          width: '22rem',
          boxShadow: '10px 10px 5px lightblue',
        }}>
        <Card.Img variant='top' src={img} />
        <Card.Body>
          <Card.Title className='text-center'>{name}</Card.Title>
          <Card.Text>Price:{price}</Card.Text>
          <Card.Text>{description}</Card.Text>
          <button
            onClick={handleCheckout}
            className='btn btn-outline-success d-block m-auto'>
            Book The Package
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
