import { useState } from 'react';
import * as s from './FilterCar.styled';

export const FilterCar = ({ data }) => {
  const [inputBrand, setInputBrand] = useState('');
  const [inputPrice, setInputPrice] = useState('');
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  const uniqueMakes = [...new Set(data.map(car => car.make))];
  const uniquePrice = [...new Set(data.map(car => car.rentalPrice))];

  const handleChangeInputBrand = evt => setInputBrand(evt.currentTarget.value);

  const handleChangeInputPrice = evt => setInputPrice(evt.currentTarget.value);

  const handleChangeMileageFrom = evt =>
    setMileageFrom(evt.currentTarget.value);

  const handleChangeMileageTo = evt => setMileageTo(evt.currentTarget.value);

  const handleSubmit = evt => {
    evt.preventDefault();

    const filterCar = data
      .filter(({ make }) => make.includes(inputBrand))
      .filter(({ rentalPrice }) => rentalPrice.includes(inputPrice));

    console.log({ inputBrand, inputPrice, mileageFrom, mileageTo });
    console.log(filterCar);
  };

  return (
    <s.Form onSubmit={handleSubmit}>
      <s.LabelBoxMake>
        <label htmlFor="inputBrandText">
          <s.Text>Car brand</s.Text>
        </label>
        <s.Select
          type="select"
          name="inputBrand"
          id="inputBrandText"
          onChange={handleChangeInputBrand}
        >
          <option value="">Enter the text</option>
          {uniqueMakes.sort().map(make => (
            <s.DropdownList value={`${make}`}>{make}</s.DropdownList>
          ))}
        </s.Select>
      </s.LabelBoxMake>
      <s.LabelBoxPrice>
        <label htmlFor="inputPriceTo">
          <s.Text>Price/ 1 hour</s.Text>
        </label>
        <s.Select
          type="select"
          name="inputPric"
          id="inputPriceTo"
          onChange={handleChangeInputPrice}
        >
          <option value="">To $</option>
          {uniquePrice.sort().map(rentalPrice => (
            <s.DropdownList value={`${rentalPrice}`}>
              {rentalPrice}
            </s.DropdownList>
          ))}
        </s.Select>
      </s.LabelBoxPrice>
      <s.LabelBox>
        <s.Text>Car mileage / km</s.Text>
        <s.LabelBoxMileage>
          <label htmlFor="carMileageFrom">
            <s.InputMilea
              type="text"
              name="carMileageFrom"
              id="carMileageFrom"
              placeholder="From"
              value={mileageFrom}
              onChange={handleChangeMileageFrom}
            />
          </label>
          <label htmlFor="carMileageTo">
            <s.InputMilea
              type="text"
              name="carMileageTo"
              id="carMileageTo"
              placeholder="To"
              value={mileageTo}
              onChange={handleChangeMileageTo}
            />
          </label>
        </s.LabelBoxMileage>
      </s.LabelBox>

      <s.Button>Search</s.Button>
    </s.Form>
  );
};
