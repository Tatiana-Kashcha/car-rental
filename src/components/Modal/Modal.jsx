import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import * as s from './Modal.styled';

const ModalRoot = document.getElementById('modal-root');

const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <s.Backdrop onClick={handleBackdropClick}>
      <s.ModalField>
        <s.CloseButton onClick={onClose}>
          <s.IconBtn />
        </s.CloseButton>
        {children}
      </s.ModalField>
    </s.Backdrop>,
    ModalRoot
  );
};

export default Modal;
