import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
      
        <div className="footer-content">
          
        
          <div className="footer-section footer-brand">
            <h3 className="footer-logo">Distorsion Music Shop</h3>
            <p className="footer-description">
              Tu tienda de confianza para instrumentos musicales de calidad. 
              Desde guitarras hasta baterías, encontrá todo lo que necesitás para tu música.
            </p>
            <div className="footer-social">
              <a href="#" className="social-link" aria-label="Facebook">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Instagram">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.435-3.396-1.157-.948-.722-1.594-1.674-1.938-2.858-.344-1.183-.344-2.4 0-3.583.344-1.184.99-2.136 1.938-2.858.948-.722 2.099-1.157 3.396-1.157s2.448.435 3.396 1.157c.948.722 1.594 1.674 1.938 2.858.344 1.183.344 2.4 0 3.583-.344 1.184-.99 2.136-1.938 2.858-.948.722-2.099 1.157-3.396 1.157z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="YouTube">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="WhatsApp">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382C17.124 14.382 16.775 14.382 16.775 14.382C16.482 14.191 15.842 13.551 15.201 12.911C14.908 12.618 14.56 12.618 14.267 12.911C13.974 13.204 13.681 13.497 13.388 13.79C13.095 14.083 12.802 14.376 12.509 14.669C12.216 14.962 11.923 15.255 11.63 15.548C11.337 15.841 11.044 16.134 10.751 16.427C10.458 16.72 10.165 17.013 9.872 17.306C9.579 17.599 9.286 17.892 8.993 18.185C8.7 18.478 8.407 18.771 8.114 19.064C7.821 19.357 7.528 19.65 7.235 19.943C6.942 20.236 6.649 20.529 6.356 20.822C6.063 21.115 5.77 21.408 5.477 21.701C5.184 21.994 4.891 22.287 4.598 22.58C4.305 22.873 4.012 23.166 3.719 23.459C3.426 23.752 3.133 24.045 2.84 24.338"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div className="footer-section">
            <h4 className="footer-title">Enlaces Rápidos</h4>
            <ul className="footer-links">
              <li><a href="/">Inicio</a></li>
              <li><a href="/productos">Productos</a></li>
              <li><a href="/ofertas">Ofertas</a></li>
              <li><a href="/marcas">Marcas</a></li>
              <li><a href="/nosotros">Nosotros</a></li>
            </ul>
          </div>

          {/* Categorías */}
          <div className="footer-section">
            <h4 className="footer-title">Categorías</h4>
            <ul className="footer-links">
              <li><a href="/guitarras">Guitarras</a></li>
              <li><a href="/bajos">Bajos</a></li>
              <li><a href="/baterias">Baterías</a></li>
              <li><a href="/teclados">Teclados</a></li>
              <li><a href="/accesorios">Accesorios</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="footer-section">
            <h4 className="footer-title">Contacto</h4>
            <div className="footer-contact">
              <div className="contact-item">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <span>Av. Corrientes 2037, C1001 Cdad, Buenos Aires</span>
              </div>
              <div className="contact-item">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
                <span>+54 9 11 1234-5678</span>
              </div>
              <div className="contact-item">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
                <span>info@distorsionmusic.com</span>
              </div>
              <div className="contact-item">
                <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                <span>Lun - Vie: 9:00 - 19:00</span>
              </div>
            </div>
          </div>

        </div>

        {/* Newsletter */}
        <div className="footer-newsletter">
          <h4 className="newsletter-title">¡Suscribite a nuestro newsletter!</h4>
          <p className="newsletter-text">Recibí las mejores ofertas y novedades directamente en tu email.</p>
          <div className="newsletter-form">
            <input 
              type="email" 
              placeholder="Tu email aquí..." 
              className="newsletter-input"
            />
            <button className="newsletter-btn">Suscribirse</button>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="footer-divider"></div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; 2025 Distorsion Music Shop. Todos los derechos reservados.</p>
          </div>
          <div className="footer-legal">
            <a href="/politica-privacidad">Política de Privacidad</a>
            <span className="separator">•</span>
            <a href="/terminos">Términos y Condiciones</a>
            <span className="separator">•</span>
            <a href="/cambios-devoluciones">Cambios y Devoluciones</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;