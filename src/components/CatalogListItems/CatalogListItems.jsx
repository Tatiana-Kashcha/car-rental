import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import * as s from './CatalogListItems.styled';
import { CarDetails } from 'components/CarDetails/CarDetails';

export const CatalogListItems = ({ car }) => {
  const [isShowModal, setIsShowModal] = useState(false);

  const showModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  return (
    <>
      <s.ButtonLearnMore onClick={showModal}>Learn more</s.ButtonLearnMore>

      {isShowModal && (
        <Modal closeModal={closeModal}>
          <CarDetails car={car} />
        </Modal>
      )}
    </>
  );
};
