import React, {useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Verify = () => {
    // const [, setarr] = useContext(Arr);
    const navigate = useNavigate();
    const [data , setdata] = useState({});
    const [k,setloading] = useState(false);


    const set = e =>setdata({...data,[e.target.name] : e.target.value});

    let param = useParams();

    const submitData = async (e) =>{
        e.preventDefault();
        setloading(true);
        try{
            data['id'] = param.id;
            var res = await axios.post('https://artgallerybackend-production-1fb5.up.railway.app/user/verify', data);
            console.log(res);
            navigate('/login');
          }
          catch(error){
            console.log(error);
            
          }
    }

    const sendOTP = async ()=>{
      setloading(true);
        data['otp'] = '';
        data['id'] = param.id;
        try{
            data['id'] = param.id;
            var res = await axios.post('https://artgallerybackend-production-1fb5.up.railway.app/user/verify', data);
            console.log(res);
          }
          catch(error){
            setloading(false);
            console.log(error.response);
          }
    }


  return (
    <div className='addhotel-div verifcation-div'>
    <h1 className='login-h1' style={{textAlign:'left', color:'#000'}}>Verification</h1>
        <form className='form-class-addhotel' onSubmit={submitData}>
            <input type='email' className='addhotel-input' name='email' placeholder='Email Id' onChange={set} required />
            <div className='flex-div' >
            <input type='text' className='addhotel-input' name='otp' style={{width:"24%"}} placeholder='OTP' onChange={set} required />
            <input type='button' className='addhotel-input save' value='Get OTP' onClick={sendOTP} />
            </div>
            <input type='submit' className='addhotel-input save' value='Verify' />
            </form>
    </div>
  )
}

export default Verify