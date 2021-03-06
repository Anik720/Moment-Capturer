import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import LoadServices from '../../Hooks/Hooks';
import './Checkout.css';
const Checkout = () => {
  const { serviceId } = useParams();
  const [services, setServices] = useState([]);
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch('https://raw.githubusercontent.com/Anik720/web/main/data.json')
      .then((res) => res.json())
      .then((data) => {
        setServices(data);

        //setServices(service);
      });
  }, []);
  setTimeout(() => {
    const service = services.find((x) => x.id === parseInt(serviceId));
    setService(service);
  }, 1000);

  //console.log(typeof serviceId);
const handleCheck = () => {
  alert('Thanks for purchasing');
};
return (
  <div className='h-100 '>
    <h5 className='text-center'>Shipping Information</h5>
    <div className='row anik'>
      <div className='col col-lg-10 col-md-12 w-75'>
        <form onSubmit={handleCheck}>
          <div class='mb-3'>
            <label for='exampleInputEmail1' class='form-label'>
              Name
            </label>
            <input
              type='text'
              class='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              required
            />
            <label for='exampleInputEmail1' class='form-label'>
              Email-address
            </label>
            <input
              type='email'
              class='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              required
            />
            <label for='exampleInputEmail1' class='form-label'>
              Phone Number
            </label>
            <input
              type='text'
              class='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              required
            />
            <label for='exampleInputEmail1' class='form-label'>
              Address
            </label>
            <input
              type='text'
              class='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
              required
            />
          </div>
          <div class='mb-3'>
            <label for='exampleInputPassword1' class='form-label'>
              Country
            </label>
            <input
              type='text'
              class='form-control'
              id='exampleInputPassword1'
              required
            />
          </div>

          <button type='submit' class='btn btn-primary'>
            Submit
          </button>
        </form>
      </div>

      <div className='col col-lg-2 col-md-12'>
        <h5>
          Package: <span>{service?.name}</span>
        </h5>
      </div>
    </div>
  </div>
);
};

export default Checkout;
