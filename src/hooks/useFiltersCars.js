import { useState } from 'react';

export const useFiltersCars = data => {
  const [inputBrand, setInputBrand] = useState('');
  const [inputPrice, setInputPrice] = useState('');
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  const handleChangeInputBrand = evt => setInputBrand(evt.currentTarget.value);

  const handleChangeInputPrice = evt => setInputPrice(evt.currentTarget.value);

  const handleChangeMileageFrom = evt =>
    setMileageFrom(evt.currentTarget.value);

  const handleChangeMileageTo = evt => setMileageTo(evt.currentTarget.value);

  const filterCar = data => {
    data
      .filter(({ make }) => make.includes(inputBrand))
      .filter(({ rentalPrice }) => rentalPrice.includes(inputPrice));
  };

  return [
    filterCar,
    mileageFrom,
    mileageTo,
    inputBrand,
    inputPrice,
    handleChangeInputBrand,
    handleChangeInputPrice,
    handleChangeMileageFrom,
    handleChangeMileageTo,
  ];
};
