import React from 'react';
import { useCart } from '../context/CartContext';

const Products = () => {
  const { products, addToCart, addToWishlist } = useCart();

  return (
    <div>
      <h2>Products</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {products.map((product) => (
          <div
            key={product.id}
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '16px',
              width: '200px',
              textAlign: 'center',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '100px', height: '100px', objectFit: 'contain', marginBottom: '8px' }}
            />
            <h4 style={{ fontSize: '16px', marginBottom: '8px' }}>{product.title}</h4>
            <p style={{ fontSize: '14px', fontWeight: 'bold', marginBottom: '8px' }}>
              Price: ${product.price}
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <button
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#28a745',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              <button
                style={{
                  padding: '8px 12px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
                onClick={() => addToWishlist(product)}
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
