import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/navbar.jsx';
import Home from './components/home.jsx';
import Login from './components/login.jsx';
import Register from './components/register.jsx';
import Contact from './components/contact.jsx';
function App() {
  return (
    <div className="App">
      <Nav/>
      <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
      </Routes>
      <Contact/>
    </BrowserRouter>
    </div>
  );
}

export default App;
