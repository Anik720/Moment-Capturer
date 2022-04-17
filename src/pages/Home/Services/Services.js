import React, { useEffect, useState } from 'react';
import LoadServices from '../../../Hooks/Hooks';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {
  const [services, setServices] = LoadServices();
  const size = 3;
  const items = services.slice(0, size); // res: ['apple', 'banana', 'orange']
  // useEffect(() => {
  //   fetch('services.json')
  //     .then((res) => res.json())
  //     .then((data) => setServices(data));
  // });
  return (
    <div className=''>
      <div className='row'>
        {services.map((service) => (
          <Service service={service} items={items}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
