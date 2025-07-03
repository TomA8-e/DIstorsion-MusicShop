import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductDetail.css';
import { useCart } from '../../context/CartContext'; 

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const { addToCart } = useCart(); // función para agregar

  useEffect(() => {
    const stored = localStorage.getItem('products');
    if (stored) {
      const allProducts = JSON.parse(stored);
      const found = allProducts.find(p => p.id === parseInt(id));
      setProduct(found);
    }
  }, [id]);

  if (!product) return <div className="detail-loading">Cargando producto...</div>;

  return (
    <div className="product-detail-container">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h1>{product.name}</h1>
        <p className="price">${product.price.toLocaleString()}</p>
        <p className="installments">9 cuotas sin interés de ${(product.price / 9).toFixed(2)}</p>
        <p className="envio">🚚 Envío gratis</p>
        <button onClick={() => addToCart(product)} className="btn-buy">
          AGREGAR AL CARRITO
        </button>
        <button onClick={() => navigate(-1)} className="btn-back">← Volver</button>
      </div>
    </div>
  );
};

export default ProductDetail;