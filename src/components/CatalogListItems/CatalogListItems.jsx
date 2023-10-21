import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import * as s from './CatalogListItems.styled';
import { CarDetails } from 'components/CarDetails/CarDetails';
import { ReactComponent as IconFavorite } from '../../icons/heart.svg';

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
      <s.Thumb>
        <s.Img src={car.img} alt="Car" />
      </s.Thumb>
      <s.IconContainer>
        <IconFavorite />
        {/* <img src={isFavorite(car.id) ? activeIcon : normalIcon} alt="icon" /> */}
      </s.IconContainer>
      <s.Title>
        <s.Name>
          {car.make} <s.AccentTitle>{car.model}</s.AccentTitle>, {car.year}
        </s.Name>
        <s.Price>{car.rentalPrice}</s.Price>
      </s.Title>
      <s.Info>
        {car.address} | {car.rentalCompany} | {car.type} |{car.mileage} m |{' '}
        {car.accessories[2]}
      </s.Info>
      <s.ButtonLearnMore onClick={showModal}>Learn more</s.ButtonLearnMore>

      {isShowModal && (
        <Modal closeModal={closeModal}>
          <CarDetails car={car} />
        </Modal>
      )}
    </>
  );
};
