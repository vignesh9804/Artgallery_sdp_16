import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainNav from '../components/navbar_manihome'; 
import '../css/displayitem.css';

const Displayitem = () => {
  const [selectedArt] = useState(JSON.parse(localStorage.getItem('item')));
  const navigate = useNavigate();

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find((item) => item.id === selectedArt.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      cart.push({ ...selectedArt, quantity: 1 });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item added to cart!');
  };

  const goback = () => {
    navigate('/shop');
  };

  return (
    <div className="cart-page">
      <MainNav />

      {selectedArt?.name ? (
        <div className="cart-item">
          <button className="back_button btn btn-primary" onClick={goback}>
            Back
          </button>
          <img src={selectedArt.url} alt={selectedArt.name} className="cart-art-img" />
          <div className="details_div">
            <h3>{selectedArt.name}</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias ducimus dolores magnam voluptatum ex repudiandae sunt velit iusto nemo? Assumenda consequatur, dolorum voluptate dolores ut reprehenderit quibusdam iure necessitatibus ratione.</p>
            <p>Price: ₹{selectedArt.cost}</p>
            <button className="btn btn-success" onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <p>No items in the cart.</p>
      )}
    </div>
  );
};

export default Displayitem;
