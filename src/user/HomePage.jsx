import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../css/userhome.css';
import MainNav from '../components/navbar_manihome'; 
import Img1 from '../images/userhomeimg.png';

const HomePage = () => {
  const [arr, setarr] = useState([]);
  const [categorys, setcategory] = useState([]);
  const navigate = useNavigate(); // Correctly call useNavigate inside the functional component

  useEffect(() => {
    renderCategories();
    renderArts();
  }, []);

  const renderCategories = async () => {
    try {
      var response = await axios.get('https://artgallerybackend-production-1fb5.up.railway.app/category');
      setcategory(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const renderArts = async () => {
    try {
      var response = await axios.get('https://artgallerybackend-production-1fb5.up.railway.app/art');
      setarr(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBuy = (item) => {
    localStorage.setItem("item", JSON.stringify(item));
    navigate('/displayitem', { state: { art: item } });
  };

  return (
    <div className='main-home-page'>
      <MainNav />
      <div className='home-page-img mt-5'>
        <img src={Img1} alt='userhome' className='user_home_img' />
      </div>
      <div className='arts-shop-main-div'>
        <h3 className='mt-5 mb-5 arts_heading'>Popular Arts</h3>
        <div className='arts-shop-sub-div'>
          {arr?.map((item) => (
            <div className='art-div' key={item.id}>
              <img className='arts-image' src={item?.url} alt='not found url' />
              <h5 className='general-art'>{item?.name}</h5>
              <div className='d-flex justify-content-between'>
                <h5 className='general-art'>₹{item?.cost}</h5>
                <button
                  className='btn btn-success'
                  onClick={() => handleBuy(item)}
                >
                  Buy
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
