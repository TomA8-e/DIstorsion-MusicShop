import React from 'react';
import './Home.css';
import FeaturedCarousel from '../Featured/FeaturedCarousel';

const Home = () => {
  return (
    <div className="home-container">
      
      <div className="banner-section banner-fade-in">
        <img 
          src="/images/bannerguitarras.jpg" 
          alt="Banner Distorsion Music Shop" 
          className="banner-image" 
        />
      </div>

      <h1 className="home-title">Bienvenido a Distorsion Music Shop</h1>
      <p className="home-subtitle">Explorá instrumentos únicos y ofertas increíbles.</p>
      
      <FeaturedCarousel />
    </div>
  );
};

export default Home;