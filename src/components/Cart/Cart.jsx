import React from 'react';
import './Cart.css';
import { useCart } from '../../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, totalPrice } = useCart();
  const navigate = useNavigate();

  return (
    <div className="cart-container">
      <h1>🛒 Carrito de Compras</h1>

      {cartItems.length === 0 ? (
        <p className="empty-cart">Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-img" />
                <div className="cart-details">
                  <h3>{item.name}</h3>
                  <p>Precio: ${item.price.toLocaleString()}</p>
                  <p>Cantidad: {item.quantity}</p>
                  <p>Subtotal: ${(item.price * item.quantity).toLocaleString()}</p>
                  <button onClick={() => removeFromCart(item.id)} className="remove-btn">Eliminar</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Total: ${totalPrice.toLocaleString()}</h2>
            <button onClick={clearCart} className="clear-btn">Vaciar Carrito</button>
            <button onClick={() => navigate('/')} className="back-btn">← Seguir Comprando</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;