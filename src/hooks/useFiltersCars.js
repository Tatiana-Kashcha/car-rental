import { useState } from 'react';

export const useFiltersCars = () => {
  const [inputBrand, setInputBrand] = useState('');
  const [inputPrice, setInputPrice] = useState('');
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  const handleChangeInputBrand = evt => setInputBrand(evt.currentTarget.value);

  const handleChangeInputPrice = evt => setInputPrice(evt.currentTarget.value);

  const handleChangeMileageFrom = evt =>
    setMileageFrom(evt.currentTarget.value);

  const handleChangeMileageTo = evt => setMileageTo(evt.currentTarget.value);

  return [
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
