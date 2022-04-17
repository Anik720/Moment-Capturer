import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import LoadServices from '../../Hooks/Hooks';
import './Checkout.css';
const Checkout = () => {
  const [services, setServices] = LoadServices();
  const { serviceId } = useParams();
  console.log(serviceId);

  console.log(services);
  return (
    <div className='h-100 '>
      <div className='row anik'>
        <div className='col col-lg-10 col-md-12 w-75'>
          <form>
            <div class='mb-3'>
              <label for='exampleInputEmail1' class='form-label'>
                Phone Number
              </label>
              <input
                type='email'
                class='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
              />
              <label for='exampleInputEmail1' class='form-label'>
                Address
              </label>
              <input
                type='email'
                class='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
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
              />
            </div>

            <button type='submit' class='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>

        <div className='col col-lg-2 col-md-12'>
          <h1>Hello</h1>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
