import React from 'react';

const Blogs = () => {
  return (
    <div className='bg-dark text-light'>
      <h3 className='text-center'>
        {' '}
        Difference between authorization and authentication?
      </h3>
      <div className='d-flex'>
        <img
          src='https://miro.medium.com/max/1000/0*EGe-sdGsXYBtlmkW.png'
          alt=''
          width='50%'
        />
        <p>
          Authentication: 1.Authentication basically determines who the user is.
          2.The authentication system builds upon the information that the user
          provides. 3.Authentication is the first step of a good identity and
          access management process. 4. Authentication is visible to the user
          and he might can change that information too.
          <br /> Authoriztion: 1. Authorization is system by which it can be
          determined that a resource is accessed by whom. 2.The whole system is
          created and also maintained by the creator. 3. Authorization always
          happens after authentication. 4.Authorization isn’t visible to or
          changeable by the user.
        </p>
      </div>
      <h1 className='text-center'>
        {' '}
        Why are you using firebase? What other options do you have to implement
        authentication?
      </h1>
      <div className='d-flex'>
        <img
          src='https://miro.medium.com/max/1400/1*jPkuvk0lRKjIED7Zyp4TxA.jpeg'
          alt=''
          width='50%'
        />
        <p>
          There are so many services provided by google's firebase. Some of them
          are backend services, SDKs, and libraries to authenticate the user.
          Its supports authentication by email and password that are provided by
          the user. Moreover, Its supports popular federated identity providers
          like Google, Facebook and Twitter, and more. For firebase, it has
          become so easy to implement the authentication system. Firebase
          Authentication makes it easier to get your users signed in without
          having to understand the complexities behind implementing your own
          authentication system. As long as the firebase, there are some other
          systems that I can use to implement authentication. And they are
          1.Auth0 2.JWT 3.OAuth,4.passport,5.OKta
        </p>
      </div>
      <h1 className='text-center'>
        What other services does firebase provide other than authentication?
      </h1>
      <div className='d-flex'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9gkLEHYSn9okj02EjV2mO_pTtRGKN5TK5Ag&usqp=CAU'
          width='50%'
          alt=''
        />
        <ul>
          <li>Cloud Firestore</li>
          <li>Cloud Functions</li>
          <li>Authentication</li>
          <li>Hosting</li>
          <li>Cloud Storage</li>
          <li>Google Analytics</li>
          <li>Predictions</li>
          <li>Cloud Messaging</li>
          <li>Dynamic Links</li>
          <li>Remote Config</li>
        </ul>
      </div>
    </div>
  );
};

export default Blogs;
