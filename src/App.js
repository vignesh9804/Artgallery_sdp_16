import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home.jsx';
import Login from './components/login.jsx';
import Register from './components/register.jsx';
import Contact from './components/contact.jsx';
import MainHome from './user/HomePage.jsx';
import Verify from './components/Verify.jsx';
import CartPage from './user/cartPage.jsx';
import DisplayItem from './user/displayitem.jsx';
import Admin from './admin/adminhome.jsx'
import Additem from './admin/additem.jsx'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/shop' element={<MainHome/>}/>
          <Route path='/loggedin' element={<div>logged in </div>}/>
          <Route path='/verify/:id' element={<Verify/>}/>
          <Route path='/cart' element={<CartPage/>} />
          <Route path='/logout' element={<Login/>}/>
          <Route path='/displayitem' element={<DisplayItem/>}/>
          <Route path='/admin' element={<Admin/>}/>
          <Route path='/dashboard' element={<Admin/>}/>
          <Route path='/additem' element={<Additem/>}/>
      </Routes>
      <Contact/>
    </BrowserRouter>
    </div>
  );
}

export default App;
