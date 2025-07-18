import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem('user');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch {
      return null;
    }
  });

  const login = async (email, password) => {
    try {
      const res = await axios.post(`${API_URL}/api/auth/login`, { email, password });

      if (res.data && res.data.token) {
        const userData = { ...res.data.user, token: res.data.token };
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
        return { success: true };
      }
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.message || 'Error al iniciar sesión',
      };
    }
  };
const register = async (email, password, name, role = 'cliente') => {
  try {
    const res = await axios.post(`${API_URL}/api/auth/register`, {
      email,
      password,
      nombre: name,
      rol: role
    });
    return { success: true, message: res.data.message };
  } catch (error) {
    return { success: false, message: error.response?.data?.message || 'Error de registro' };
  }
};

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const isAuthenticated = !!user;
  const isAdmin = user?.rol === 'admin'; // backend devuelve "rol"

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, isAdmin, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);