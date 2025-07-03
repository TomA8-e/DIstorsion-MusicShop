import React, { createContext, useState, useContext, useEffect } from 'react';
import { hardcodedUsers } from '../constants/users'; // Importa los usuarios hardcodeados


const AuthContext = createContext(null); // Inicializa el contexto con null

export const AuthProvider = ({ children }) => {
  // Estado para almacenar el usuario actualmente logueado
  // Intenta cargar el usuario desde localStorage al inicio
  const [user, setUser] = useState(() => {
    try {
      const storedUser = localStorage.getItem('user');
      return storedUser ? JSON.parse(storedUser) : null;
    } catch (error) {
      console.error("Error parsing user from localStorage:", error);
      return null;
    }
  });

  // Estado para verificar si el usuario está autenticado
  const isAuthenticated = !!user;
  // Estado para verificar si el usuario tiene rol de administrador
  const isAdmin = user && user.role === 'admin';

  // Función para simular el inicio de sesión
  const login = (email, password) => {
    // Busca un usuario que coincida con el email y la contraseña
    const foundUser = hardcodedUsers.find(
      u => u.email === email && u.password === password
    );

    if (foundUser) {
      // Si se encuentra el usuario, lo guarda en el estado y en localStorage
      setUser(foundUser);
      localStorage.setItem('user', JSON.stringify(foundUser));
      return { success: true, message: 'Inicio de sesión exitoso.' };
    } else {
      // Si no se encuentra, retorna un mensaje de error
      return { success: false, message: 'Email o contraseña incorrectos.' };
    }
  };

  // Función para simular el cierre de sesión
  const logout = () => {
    // Limpia el estado del usuario y elimina el usuario de localStorage
    localStorage.removeItem('user');
    setUser(null);
    return { success: true, message: 'Sesión cerrada exitosamente.' };
  };

  // Función para simular el registro de un nuevo usuario
  // Dado que no hay backend, este registro es solo una simulación y no persiste.
  const register = (email, password, name) => {
    // Verifica si el email ya existe entre los usuarios hardcodeados
    const userExists = hardcodedUsers.some(u => u.email === email);
    if (userExists) {
      return { success: false, message: 'El email ya está registrado.' };
    }

    // En un proyecto real, aquí se añadiría el usuario a la base de datos.
    // Para esta consigna, simplemente simulamos el éxito.
    // Opcional: Podrías añadirlo a una copia en memoria de hardcodedUsers si quieres simularlo un poco más,
    // pero no persistirá al recargar la página.
    console.log(`Simulando registro de nuevo usuario: ${name} (${email})`);
    return { success: true, message: 'Registro exitoso. Ya puedes iniciar sesión.' };
  };

  // El valor que se proveerá a los componentes que consuman este contexto
  const value = {
    user,
    isAuthenticated,
    isAdmin,
    login,
    logout,
    register,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Hook personalizado para consumir el contexto de autenticación fácilmente
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe ser usado dentro de un AuthProvider');
  }
  return context;
};

export default AuthProvider;