import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './FeaturedCarousel.css';

const fallbackProducts = [
  { id: 1, name: 'Fender Telecaster Deluxe', image: '/images/fenderteledelux.jpg', price: 120000 },
  { id: 2, name: 'Dingwall NG-3 Combustion 5 Bajo', image: '/images/dingwallng3.jpg', price: 155000 },
  { id: 3, name: 'Batería MAPEX Armony Studio', image: '/images/bateria.jpg', price: 200000 },
  { id: 4, name: 'Sintetizador KORG OPSIX', image: '/images/korgop.jpg', price: 180000 },
];

const FeaturedCarousel = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); // HOOK PARA NAVEGACIÓN

  useEffect(() => {
    const stored = localStorage.getItem('products');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setProducts(parsed);
        } else {
          setProducts(fallbackProducts);
        }
      } catch (e) {
        console.error("Error al leer localStorage:", e);
        setProducts(fallbackProducts);
      }
    } else {
      setProducts(fallbackProducts);
    }
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-header">
        <h2 className="carousel-title">Productos Destacados</h2>
        <div className="carousel-subtitle">Los instrumentos más populares de nuestra tienda</div>
      </div>

      <div className="carousel-wrapper">
        <div className="carousel">
          {products.map((product) => (
            <div
              className="carousel-item"
              key={product.id}
              onClick={() => navigate(`/producto/${product.id}`)} 
              style={{ cursor: 'pointer' }}
            >
              <div className="carousel-image-container">
                <img src={product.image} alt={product.name} className="carousel-img" />
              </div>
              <div className="carousel-content">
                <h3 className="carousel-name">{product.name}</h3>
                <div className="carousel-actions">
                  <span className="carousel-price">${product.price.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-indicators">
        <div className="scroll-hint">
          <span>← Deslizá para ver más →</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCarousel;