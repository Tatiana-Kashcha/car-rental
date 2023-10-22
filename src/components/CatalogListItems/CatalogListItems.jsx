import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import * as s from './CatalogListItems.styled';
import { CarDetails } from 'components/CarDetails/CarDetails';
import { ReactComponent as IconNoFavorite } from '../../icons/noFavorite.svg';
import { ReactComponent as IconFavorite } from '../../icons/favorite.svg';

const getFavorites = () => {
  const storedFavorites = localStorage.getItem('favorites');
  return storedFavorites ? JSON.parse(storedFavorites) : [];
};

const addFavorite = carId => {
  const favorites = getFavorites();
  favorites.push(carId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
};

const removeFavorite = carId => {
  const favorites = getFavorites();
  const newFavorites = favorites.filter(id => id !== carId);
  localStorage.setItem('favorites', JSON.stringify(newFavorites));
};

export const CatalogListItems = ({ car }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const [favorites, setFavorites] = useState(getFavorites());

  const isFavorite = carId => favorites.includes(carId);

  const toggleFavorite = carId => {
    if (isFavorite(carId)) {
      removeFavorite(carId);
      setFavorites(prev => prev.filter(id => id !== carId));
    } else {
      addFavorite(carId);
      setFavorites(prev => [...prev, carId]);
    }
  };

  const showModal = () => {
    setIsShowModal(true);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  return (
    <s.Card>
      <s.Thumb>
        <s.Img src={car.img} alt="Car" />
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
