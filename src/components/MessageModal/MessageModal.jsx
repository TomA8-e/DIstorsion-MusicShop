import React from 'react';
import './MessageModal.css'; // Estilos para el modal

const MessageModal = ({ message, type, onClose }) => {
  if (!message) return null; // No renderiza si no hay mensaje

  // Determina la clase CSS basada en el tipo de mensaje (success, error, info)
  const modalClass = `message-modal ${type || 'info'}`;

  return (
    <div className="message-modal-overlay">
      <div className={modalClass}>
        <p>{message}</p>
        <button onClick={onClose} className="message-modal-close-btn">Cerrar</button>
      </div>
    </div>
  );
};

export default MessageModal;