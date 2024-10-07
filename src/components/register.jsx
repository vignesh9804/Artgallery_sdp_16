import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/register.css';
// import { Arr } from '../../App';


const  Register = () => {
  // const [, setarr] = useContext(Arr);

  const [data , setdata] = useState({
    email : '',
    first:'',
    last :'',
    img:'',
    username : '',
    password : '',
    cpassword: '',
  });

  const [img , setimg] = useState(null);

  // useEffect(() => {
  //   setarr(['login', 'contact']);
  // }, [])

  const navigate = useNavigate();

  const set = e =>{
    setdata({...data,[e.target.name] : e.target.value});
  }

  const image = async () =>{
    const data0 = new FormData();
    data0.append("file",img);
    data0.append("upload_preset", "image_preset");

    try {
      let cloudName = 'dufxfclza', resource = 'image';
      let api = `https://api.cloudinary.com/v1_1/${cloudName}/${resource}/upload`;
      const res = await axios.post(api,data0);

      const { secure_url} = res.data;
      console.log(secure_url);
      return secure_url;
      
    } catch (error) {
      console.log(error);
      return '';
    }
  }

  const submitData = async (e) => {
    e.preventDefault();
    try {
      if(data.cpassword ===  data.password){
        if(img) {
          const url = await image();
          data.img = url;
      }
          axios.post('http://localhost:5000/register', data).then( (res) =>{
            console.log(res.data);
            if(res.data){
              navigate('/');
            }
            else {
              alert('THIS USERNAME IS AVAILABLE');
            }
            });
          }
        else{
          alert('ONCE CHECK THE PASSWORD');
        }
    }
    catch (error) {
      console.log(error);
    }
  };


  return (
    <div className='addhotel-div shadow-lg p-3 d-flex flex-row'>
      <div className="test">
        <h1 className='login-h1 text-start'>Sign Up</h1>
        <form className='form-class-addhotel' onSubmit={submitData}>
            <div className="out_div_register d-flex flex-column">
            <input type='email' className='addhotel-input' name='email' placeholder='Email Id' onChange={set} required />
            <div className='flex-div'>
              <input type='text' className='addhotel-input' name='first' style={{width:"33%"}} placeholder='First Name' onChange={set} required />
              <input type='text' className='addhotel-input' name='last' style={{width:"33%"}} placeholder='Last Name' onChange={set} required />
            </div>
            <input type='text' className='addhotel-input' name='username' placeholder='Username' onChange={set} required />
            <div className='flex-div'>
              <input type='text' className='addhotel-input' name='password' style={{width:"33%"}} placeholder='Password' onChange={set} required />
              <input type='text' className='addhotel-input' name='cpassword' style={{width:"33%"}} placeholder='Confirm Password' onChange={set} required />
            </div>
            <label className='text-start profile_name_label_tag'>Profile picture (optional)</label>
            <input type='file' className='addhotel-input' name='img' onChange={e => setimg(e.target.files[0])} /><br></br>
            <input type='submit' className='addhotel-input save' value='Register' />
            </div>
        </form>
      </div>
      <div className='test_2 d-flex flex-column justify-content-center'>
        <div className='login_image'>
              <img src="https://www.mobitel.uk/assets/img/user/signin-image.jpg" alt='not fount' />
        </div>
      </div>
    </div>
  );
}

export default Register;
