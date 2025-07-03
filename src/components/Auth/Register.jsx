import React, { useState } from 'react';
import { User, Lock, Mail, Signature } from 'lucide-react';
import './Login.css'; // Reutiliza los estilos de Login, o crea Register.css si prefieres
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import MessageModal from '../MessageModal/MessageModal';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const [modalType, setModalType] = useState('info');

  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (errors.general) {
      setErrors(prev => ({ ...prev, general: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'El nombre es requerido';
    if (!formData.email) newErrors.email = 'El email es requerido';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'El email no es válido';
    if (!formData.password) newErrors.password = 'La contraseña es requerida';
    else if (formData.password.length < 6) newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Las contraseñas no coinciden';
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsLoading(true);
    setModalMessage('');

    try {
      // Llama a la función register del contexto
      const result = register(formData.email, formData.password, formData.name);

      if (result.success) {
        setModalMessage(result.message);
        setModalType('success');
        // Redirige al login después de un registro exitoso simulado
        setTimeout(() => {
          navigate('/login');
        }, 1500);
      } else {
        setErrors({ general: result.message });
        setModalMessage(result.message);
        setModalType('error');
      }
    } catch (err) {
      console.error("Error during registration:", err);
      setErrors({ general: 'Ocurrió un error inesperado al registrarse.' });
      setModalMessage('Ocurrió un error inesperado al registrarse.');
      setModalType('error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleCloseModal = () => {
    setModalMessage('');
  };

  return (
    <div className="login-wrapper"> {/* Reutiliza la clase login-wrapper */}
      <div className="login-box"> {/* Reutiliza la clase login-box */}
        <div className="login-header">
          <div className="login-avatar">
            <User size={32} color="#ffc107" />
          </div>
          <h2>Distorsion Music Shop</h2>
          <p>Creá tu cuenta</p>
        </div>

        {errors.general && <div className="error-box">{errors.general}</div>}

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="name">Nombre</label>
            <div className="input-icon">
              <Signature size={20} />
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                className={errors.name ? 'error' : ''}
              />
            </div>
            {errors.name && <p className="error-text">{errors.name}</p>}
          </div>

          <div className="input-group">
            <label htmlFor="email">Email</label>
            <div className="input-icon">
              <Mail size={20} />
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className={errors.email ? 'error' : ''}
              />
            </div>
            {errors.email && <p className="error-text">{errors.email}</p>}
          </div>

          <div className="input-group">
            <label htmlFor="password">Contraseña</label>
            <div className="input-icon">
              <Lock size={20} />
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className={errors.password ? 'error' : ''}
              />
            </div>
            {errors.password && <p className="error-text">{errors.password}</p>}
          </div>

          <div className="input-group">
            <label htmlFor="confirmPassword">Confirmar Contraseña</label>
            <div className="input-icon">
              <Lock size={20} />
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className={errors.confirmPassword ? 'error' : ''}
              />
            </div>
            {errors.confirmPassword && <p className="error-text">{errors.confirmPassword}</p>}
          </div>

          <button type="submit" className="submit-btn" disabled={isLoading}>
            {isLoading ? <span className="spinner"></span> : 'Registrarse'}
          </button>
        </form>

        <div className="login-footer">
          <p>¿Ya tienes cuenta? <button onClick={() => navigate('/login')} className="register-btn">Inicia sesión aquí</button></p>
        </div>
      </div>

      <MessageModal
        message={modalMessage}
        type={modalType}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Register;