import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import AdminNav from '../components/adminnav';
const Adminhome = () => {
    const [arr, setarr] = useState([]);
    const [categorys, setcategory] = useState([]);
    const navigate = useNavigate(); // Correctly call useNavigate inside the functional component
  
    useEffect(() => {
      renderArts();
    }, []);

  
    const renderArts = async () => {
      try {
        var response = await axios.get('http://localhost:8081/art');
        setarr(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    
  
    return (
      <div className='main-home-page'>
        <AdminNav />
        
        <div className='arts-shop-main-div'>
          <h3 className='mt-5 mb-5 arts_heading'>Admin Page</h3>
          <div className='arts-shop-sub-div'>
            {arr?.map((item) => (
              <div className='art-div' key={item.id}>
                <img className='arts-image' src={item?.url} alt='not found url' />
                <h5 className='general-art'>{item?.name}</h5>
                <div className='d-flex justify-content-between'>
                  <h5 className='general-art'>₹{item?.cost}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

export default Adminhome
