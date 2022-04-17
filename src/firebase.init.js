// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBkZTlUmdrriPbcgjCjRCu8CC8cnv5NhqQ',
  authDomain: 'independent-service-f967e.firebaseapp.com',
  projectId: 'independent-service-f967e',
  storageBucket: 'independent-service-f967e.appspot.com',
  messagingSenderId: '1061884621769',
  appId: '1:1061884621769:web:ae712ae34996c79c4eae18',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
