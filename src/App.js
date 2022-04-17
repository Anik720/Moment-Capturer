import logo from './logo.svg';
import './App.css';
import Home from '../src/pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './pages/Shared/Header/Header';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Checkout from './pages/Checkout/Checkout';
import RequireAuth from './pages/RequireAuth/RequireAuth';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Footer from './pages/Shared/Footer/Footer';

function App() {
  return (
    <div className=''>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route
          path='/checkout/:serviceId'
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }></Route>
        \<Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
