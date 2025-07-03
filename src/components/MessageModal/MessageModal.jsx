import React from 'react';
import './MessageModal.css'; 

const MessageModal = ({ message, type, onClose }) => {
  if (!message) return null; 

  
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