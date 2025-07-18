import React from 'react';
import './Nosotros.css';

const Nosotros = () => {
  return (
    <div className="nosotros-container">
      <div className="nosotros-header">
        <h1 className="nosotros-title">Sobre Nosotros</h1>
        <p className="nosotros-subtitle">
          Más que una tienda, somos una comunidad musical
        </p>
      </div>
      <div className="nosotros-content">
        <p>
          En Distorsión Music Shop, compartimos tu pasión por la música. Somos más que una tienda:
          somos una comunidad de músicos, técnicos y amantes del sonido.
        </p>
        
        <p>
          Fundada en 2025, nuestra misión es acercarte los mejores instrumentos, equipos y
          accesorios con una atención personalizada y un toque moderno.
        </p>
        
        <p>
          Trabajamos con las marcas más reconocidas del mundo y también con artesanos locales para
          ofrecerte una selección única. Nuestro equipo está siempre listo para asesorarte,
          inspirarte y ayudarte a encontrar tu próximo instrumento.
        </p>
        
        <p>
          Gracias por formar parte de esta distorsionada pero hermosa familia musical.
        </p>
      </div>

      {/* Simple Values Grid */}
      <div className="nosotros-grid">
        <div className="nosotros-card">
          <div className="nosotros-card-header">
            <svg className="nosotros-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
            </svg>
            <h3>Pasión Musical</h3>
          </div>
          <p>Una comunidad de músicos que viven y respiran música.</p>
        </div>

        <div className="nosotros-card">
          <div className="nosotros-card-header">
            <svg className="nosotros-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h3>Comunidad</h3>
          </div>
          <p>Creamos conexiones genuinas entre músicos de todos los niveles.</p>
        </div>

        <div className="nosotros-card">
          <div className="nosotros-card-header">
            <svg className="nosotros-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <h3>Calidad</h3>
          </div>
          <p>Las mejores marcas del mundo y artesanos locales seleccionados.</p>
        </div>

        <div className="nosotros-card">
          <div className="nosotros-card-header">
            <svg className="nosotros-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <h3>Atención Personal</h3>
          </div>
          <p>Asesoramiento personalizado para encontrar tu sonido ideal.</p>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;