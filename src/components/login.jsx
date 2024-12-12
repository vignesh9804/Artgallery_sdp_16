import React, { useState } from 'react'
import '../css/login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const Login = () => {
    const [data , setdata] = useState({});
    const navigate = useNavigate();
    const set = e => setdata({...data,[e.target.name] : e.target.value});

  const submitData = async(e) =>{
    e.preventDefault();

    try{
      var response = await axios.post('https://artgallerybackend-production-1fb5.up.railway.app/user/login', data);

      navigate(response.data.role === 'user' ? '/shop' : '/admin');
      alert("Login Success");
    }
    catch(error){
      if(error.status !== 404)
        navigate('/verify/' + error.response.data.id);
      alert(error.response.data?.message);
      console.log("error");
      
    }
  }

  return (
    <div className='d-flex flex-column justify-content-center full_outer_div_login'>
      <div className='d-flex flex-row justify-content-center'>
        <div className='shadow-lg outer_div_login d-flex flex-row'>
          <div className='login_image'>
            <img src="https://www.mobitel.uk/assets/img/user/signin-image.jpg" alt='not fount' />
          </div>
          <div className='signup_div d-flex flex-column justify-content-center'>
            <h5 className='mb-4 '>Sign In</h5>
            <label for="" className='text-start mb-2'>Username</label>
            <input type="text" placeholder='Enter username' className='p-1' name="username" onChange={set}></input>
            <label for="" className='text-start mb-2 mt-2'>Password</label>
            <input type="password" placeholder='Enter Password' className='p-1' name="password" onChange={set}></input>
            <br/>
            <div className='text-start'>
              <button className='btn btn-info login_btn' onClick={submitData}>Login</button>
            </div>
            <a href='/register' className='login_register_anchor'>Register Here</a>
          </div>
        </div>
      </div>
    </div>
      
     
  )
}

export default Login
