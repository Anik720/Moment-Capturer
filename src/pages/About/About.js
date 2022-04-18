import React from 'react';
import './About.css';
const About = () => {
  return (
    <div className='bg-dark text-light row kibria'>
      <div className='col col-lg-6 col-md-12'>
        <img
          src='https://golam-kibria-anik.netlify.app/img/about.jpg'
          alt=''
          width='50%'
        />
      </div>
      <div className='col col-lg-6 col-md-12'>
        <h5>
          Greetings, This is Golam Kibria Anik who is a computer engineer and
          passionate about web development. He has done his undergraduate degree
          from North South University and focusing on becoming a great web
          developer. Currently, he is employed as a backend developer in a
          company and also as an instructor at Amar skill. His future goal is to
          learn Machine learning, and data science and become a problem solver.
          And his primary goal is to join Google as a software engineer,Thanks
        </h5>
      </div>
    </div>
  );
};

export default About;
