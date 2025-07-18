import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext'; 
import { useNavigate } from 'react-router-dom';
import './AdminDashboard.css';

const defaultProducts = [
  { id: 1, name: 'Fender Telecaster Deluxe', price: 120000, image: '/images/fenderteledelux.jpg' },
  { id: 2, name: 'Dingwall NG-3 Combustion 5 Bajo', price: 155000, image: '/images/dingwallng3.jpg' },
  { id: 3, name: 'Batería MAPEX Armony Studio', price: 200000, image: '/images/bateria.jpg' },
  { id: 4, name: 'Sintetizador KORG OPSIX', price: 180000, image: '/images/korgop.jpg' },
];

const AdminDashboard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  // Redirigir si no es admin
  useEffect(() => {
    if (!user || user.rol !== 'admin') {
      navigate('/'); // o mostrar un mensaje de error
    }
  }, [user, navigate]);

  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', image: '' });

  useEffect(() => {
    const stored = localStorage.getItem('products');
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setProducts(parsed);
        } else {
          setProducts(defaultProducts);
          localStorage.setItem('products', JSON.stringify(defaultProducts));
        }
      } catch (e) {
        console.error("Error al leer productos:", e);
        setProducts(defaultProducts);
        localStorage.setItem('products', JSON.stringify(defaultProducts));
      }
    } else {
      setProducts(defaultProducts);
      localStorage.setItem('products', JSON.stringify(defaultProducts));
    }
  }, []);

  const handleAddProduct = () => {
    if (!newProduct.name.trim() || isNaN(newProduct.price) || newProduct.price <= 0 || !newProduct.image.trim()) {
      alert("Por favor completá todos los campos correctamente.");
      return;
    }

    const nextId = products.length ? Math.max(...products.map(p => p.id)) + 1 : 1;
    const updatedProducts = [...products, { ...newProduct, id: nextId }];
    setProducts(updatedProducts);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    setNewProduct({ name: '', price: '', image: '' });
    alert("Producto agregado con éxito.");
  };

  const handleDeleteProduct = (id) => {
    const confirmed = window.confirm("¿Seguro que querés eliminar este producto?");
    if (confirmed) {
      const updated = products.filter(p => p.id !== id);
      setProducts(updated);
      localStorage.setItem('products', JSON.stringify(updated));
    }
  };

  return (
    <div className="admin-dashboard-container">
      <h2>Panel de Administración</h2>
      <p>¡Bienvenido, {user?.nombre || user?.email}! Desde acá podés gestionar la tienda.</p>

      <section className="product-management">
        <h3>Administrar Instrumentos</h3>
        <form onSubmit={(e) => { e.preventDefault(); handleAddProduct(); }}>
          <input
            type="text"
            placeholder="Nombre del instrumento"
            value={newProduct.name}
            onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Precio"
            value={newProduct.price}
            onChange={(e) => setNewProduct({ ...newProduct, price: parseFloat(e.target.value) })}
          />
          <input
            type="text"
            placeholder="URL de la imagen"
            value={newProduct.image}
            onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          />
          <button type="submit">Añadir Instrumento</button>
        </form>

        <h4>Lista de Instrumentos</h4>
        <ul>
          {products.map(product => (
            <li key={product.id}>
              {product.name} - ${product.price.toLocaleString()}
              <button onClick={() => handleDeleteProduct(product.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default AdminDashboard;