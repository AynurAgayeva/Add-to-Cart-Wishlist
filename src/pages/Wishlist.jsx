import React from 'react';
import { useCart } from '../context/CartContext';

const Wishlist = () => {
  const { wishlist, addToCart, removeFromWishlist, clearWishlist } = useCart();

  return (
    <div>
      <h2>Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>Your wishlist is empty!</p>
      ) : (
        <>
          <div>
            {wishlist.map((item) => (
              <div key={item.id} style={{ marginBottom: '10px' }}>
                <p>{item.title} - ${item.price}</p>
                <button onClick={() => addToCart(item)}>Add to Cart</button>
                <button onClick={() => removeFromWishlist(item.id)}>Remove</button>
              </div>
            ))}
          </div>
          <button onClick={clearWishlist} style={{ marginTop: '20px' }}>
            Clear All
          </button>
        </>
      )}
    </div>
  );
};

export default Wishlist;
