import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import * as s from './Modal.styled';

const ModalRoot = document.getElementById('modal-root');

const Modal = ({ closeModal, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const handleBackdropClick = evt => {
    if (evt.currentTarget === evt.target) {
      closeModal();
    }
  };
  return createPortal(
    <s.Backdrop onClick={handleBackdropClick}>
      <s.ModalField>
        <s.CloseButton type="button" onClick={closeModal}>
          <s.IconBtn />
        </s.CloseButton>
        {children}
      </s.ModalField>
    </s.Backdrop>,
    ModalRoot
  );
};

export default Modal;
