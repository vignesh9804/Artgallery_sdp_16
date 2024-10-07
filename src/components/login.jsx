import React from 'react'
import '../css/login.css';
const login = () => {
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
            <input type="email" placeholder='Enter username' className='p-1'></input>
            <label for="" className='text-start mb-2 mt-2'>Password</label>
            <input type="password" placeholder='Enter Password' className='p-1'></input>
            <br/>
            <div className='text-start'>
              <button className='btn btn-info login_btn'>Login</button>
            </div>
            <a href='/register' className='login_register_anchor'>Register Here</a>
          </div>
        </div>
      </div>
    </div>
      
     
  )
}

export default login
