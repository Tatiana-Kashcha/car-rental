import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import * as s from './CatalogListItems.styled';

export const CatalogListItems = () => {
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
          {/* <CarDetails
            id={id}
            closeModal={closeModal}
          /> */}
        </Modal>
      )}
    </>
  );
};
