import { useState } from 'react';

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

export const useFavorites = () => {
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

  return [favorites, isFavorite, toggleFavorite];
};
