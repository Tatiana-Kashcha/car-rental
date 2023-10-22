import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import * as s from './CatalogListItems.styled';
import { CarDetails } from 'components/CarDetails/CarDetails';
import { ReactComponent as IconNoFavorite } from '../../icons/noFavorite.svg';
import { ReactComponent as IconFavorite } from '../../icons/favorite.svg';
import { useFavorites } from 'hooks/useFavorites';
import noImageIcon from '../../images/no-image.jpg';

export const CatalogListItems = ({ car }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [, isFavorite, toggleFavorite] = useFavorites();

  const showModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  return (
    <s.Card>
      <s.Thumb>
        {car.img ? (
          <s.Img src={car.img} alt="Car" />
        ) : (
          <s.Stopper src={noImageIcon} alt="Car" />
        )}
      </s.Thumb>
      <s.IconContainer
        onClick={e => {
          e.stopPropagation();
          toggleFavorite(car.id);
        }}
      >
        {!isFavorite(car.id) && <IconNoFavorite />}
        {isFavorite(car.id) && <IconFavorite />}
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
    </s.Card>
  );
};
