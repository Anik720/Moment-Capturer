import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Service.css';
const Service = ({ service, items }) => {
  const { id, name, img } = service;
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate(`/checkout/${id}`);
  };
  return (
    <div className='col col-lg-4 col-md-6 col-sm-12 g-5'>
      <Card
        style={{
          width: '22rem',
          boxShadow: '10px 10px 5px lightblue',
        }}>
        <Card.Img variant='top' src={img} />
        <Card.Body>
          <Card.Title className='text-center'>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <button onClick={handleCheckout}>Checkout</button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
