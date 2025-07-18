import React from 'react';
import './MessageModal.css'; // Este es opcional pero recomendable

const MessageModal = ({ message, type = 'info', onClose }) => {
  if (!message || typeof message !== 'string') return null;

  return (
    <div className="message-modal-overlay" onClick={onClose}>
      <div className={`message-modal ${type}`} onClick={(e) => e.stopPropagation()}>
        <p>{message}</p>
        <button onClick={onClose} className="message-modal-close-btn">Cerrar</button>
      </div>
    </div>
  );
};

export default MessageModal;