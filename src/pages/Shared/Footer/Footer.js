import React from 'react';
import './Footer.css';
import pic from '../../android-app-store-app-store-and-android-icons-11553546864dl6gbnzyt2.png';
const Footer = () => {
  return (
    <div className='bg-dark mt-5 sticky-bottom p-5 footer'>
      <div>
        <img
          src='https://png.pngtree.com/png-vector/20191026/ourlarge/pngtree-camera-icon-png-image_1871609.jpg'
          width='50px'
          alt=''
        />
        <p className=' text-light'>Copyright &copy; Golam Kibria Anik</p>
      </div>
      <div>
        <h5 className='text-light'>Overview</h5>
        <p className=' text-light'>About Us</p>
        <p className=' text-light'>Career</p>
        <p className=' text-light'>Press</p>
        <p className=' text-light'>Contact</p>
        <p className=' text-light'>Ternms&condition</p>
        <p className=' text-light'>Privacy&policy</p>
      </div>
      <div>
        <h5 className='text-light'>Community</h5>
        <p className=' text-light'>Community Central</p>
        <p className=' text-light'>Support</p>
        <p className=' text-light'>Help</p>
        <p className=' text-light'>Do not Sell my info</p>
        <h5 className=' text-light'>Advertise</h5>
        <p className=' text-light'>Media kit</p>
        <p className=' text-light'>Contact</p>
      </div>
      <div>
        <h5 className='text-light'>Our Apps</h5>
        <img src={pic} width='150px' alt='' />
      </div>
    </div>
  );
};

export default Footer;
