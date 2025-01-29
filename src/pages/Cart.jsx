import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <h2>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <>
          <div>
            {cart.map((item) => (
              <div key={item.id} style={{ marginBottom: '10px' }}>
                <p>{item.title} - ${item.price}</p>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>
          <button onClick={clearCart} style={{ marginTop: '20px' }}>
            Clear All
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;
