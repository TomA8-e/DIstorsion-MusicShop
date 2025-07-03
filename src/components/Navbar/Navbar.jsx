import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/logoapp.png';
import { useAuth } from '../../context/AuthContext';
import { useCart } from '../../context/CartContext'; 

const Navbar = () => {
  const { user, logout } = useAuth();
  const { cartCount } = useCart(); //  contador carrito
  const [showProductsDropdown, setShowProductsDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();

  const handleAuth = () => {
    if (user) {
      logout();
      navigate('/login');
    } else {
      navigate('/login');
    }
  };

  const productCategories = [
    { name: 'Guitarras Eléctricas', path: '/productos/guitarras-electricas' },
    { name: 'Guitarras Acústicas', path: '/productos/guitarras-acusticas' },
    { name: 'Bajos', path: '/productos/bajos' },
    { name: 'Instrumentos de Percusión', path: '/productos/percusion' },
    { name: 'Teclados y Pianos', path: '/productos/teclados' },
    { name: 'Amplificadores', path: '/productos/amplificadores' },
    { name: 'Accesorios', path: '/productos/accesorios' }
  ];

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src={logo} alt="Distorsion Music Shop" className="logo-img" />
        </Link>

        <button
          className="hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menú"
        >
          {mobileMenuOpen ? '✖' : '☰'}
        </button>

        <nav className={`navbar ${mobileMenuOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li>
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>Inicio</Link>
            </li>

            <li
              className="dropdown-container"
              onMouseEnter={() => setShowProductsDropdown(true)}
              onMouseLeave={() => setShowProductsDropdown(false)}
            >
              <span className="dropdown-trigger">
                Productos
                <span className={`dropdown-arrow ${showProductsDropdown ? 'open' : ''}`}>▼</span>
              </span>
              {showProductsDropdown && (
                <div className="dropdown-menu">
                  {productCategories.map((category, index) => (
                    <Link
                      key={index}
                      to={category.path}
                      className="dropdown-item"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>

            <li>
              <Link to="/nosotros" onClick={() => setMobileMenuOpen(false)}>Nosotros</Link>
            </li>

            {user?.role === 'admin' && (
              <li>
                <Link to="/admin" onClick={() => setMobileMenuOpen(false)}>Admin Panel</Link>
              </li>
            )}

            {/* Acciones en MOBILE */}
            {user && (
              <li className="user-info mobile-only">
                Hola, {user.email}
              </li>
            )}

            <li className="mobile-only">
              <Link to="/cart" onClick={() => setMobileMenuOpen(false)}>
                🛒 Carrito ({cartCount})
              </Link>
            </li>

            <li className="mobile-only">
              <button
                onClick={() => {
                  handleAuth();
                  setMobileMenuOpen(false);
                }}
                className="auth-btn"
              >
                {user ? 'Cerrar Sesión' : 'Iniciar Sesión'}
              </button>
            </li>
          </ul>
        </nav>

        {/* Acciones en DESKTOP */}
        <div className="header-actions desktop-only">
          {user && <div className="user-info"><span>Hola, {user.email}</span></div>}
          <Link to="/cart" className="cart-link">🛒 Carrito ({cartCount})</Link>
          <button onClick={handleAuth} className="auth-btn">
            {user ? 'Cerrar Sesión' : 'Iniciar Sesión'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;