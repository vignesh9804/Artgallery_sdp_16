import React, { useState, useEffect } from 'react';
import MainNav from '../components/navbar_manihome'; 
import '../css/cart.css';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
    calculateTotal(storedCart);
  }, []);

  const calculateTotal = (cartItems) => {
    const total = cartItems.reduce((acc, item) => acc + item.cost * item.quantity, 0);
    setTotalCost(total);
  };

  const updateQuantity = (id, quantity) => {
    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const deleteItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  return (
    <div className="cart-page">
      <MainNav />
      <h2 className="mt-5">Your Cart</h2>
      <div className="cart-items">
        {cart.length > 0 ? (
          cart.map((item) => (
            <div className="cart_item" key={item.id}>
              <img src={item.url} alt={item.name} className="cart_art_img" />
              <div className="details_div">
                <h3>{item.name}</h3>
                <p>Price: ₹{item.cost}</p>
                <div className="quantity-controls">
                  <label>Quantity: </label>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    min="1"
                  />
                </div>
                <button className="btn btn-danger mt-4" onClick={() => deleteItem(item.id)}>
                  Delete
                </button>
              </div>
            </div>
            
          ))
        ) : (
          <p>No items in the cart.</p>
        )}
        <hr className='hr_tag'/>
      </div>
      <div className="cart-total">
        <h3>Total: ₹{totalCost}</h3>
        <btn className='btn btn-primary'>Place Order</btn>
      </div>
    </div>
  );
};

export default Cart;
