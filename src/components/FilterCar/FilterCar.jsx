import { useState } from 'react';
import * as s from './FilterCar.styled';

export const FilterCar = ({ data }) => {
  const [inputValue] = useState('');
  const [inputPriceValue] = useState('');

  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  const uniqueMakes = [...new Set(data.map(car => car.make))];
  const uniquePrice = [...new Set(data.map(car => car.rentalPrice))];

  const handleMileageFromChange = e => {
    e.preventDefault();
    setMileageFrom(e.target.value);

    console.log(mileageFrom);
  };

  const handleMileageToChange = e => {
    e.preventDefault();
    setMileageTo(e.target.value);

    console.log(mileageTo);
  };

  return (
    <>
      <s.Form>
        <s.LabelBoxMake>
          <label htmlFor="inputBrandText">
            <s.Text>Car brand</s.Text>
          </label>
          <s.Select type="select" name="inputBrand" id="inputBrandText">
            <option value="">Enter the text</option>
            {uniqueMakes

              .filter(
                make =>
                  make &&
                  make.toLowerCase().startsWith(inputValue.toLowerCase())
              )
              .map(make => (
                <s.DropdownList value="make">{make}</s.DropdownList>
              ))}
          </s.Select>{' '}
        </s.LabelBoxMake>
        <s.LabelBoxPrice>
          <label htmlFor="inputPriceTo">
            <s.Text>Price/ 1 hour</s.Text>
          </label>
          <s.Select type="select" name="inputPric" id="inputPriceTo">
            {' '}
            <option value="">To $</option>
            {uniquePrice
              .filter(
                rentalPrice =>
                  rentalPrice &&
                  rentalPrice
                    .toLowerCase()
                    .startsWith(inputPriceValue.toLowerCase())
              )
              .map(rentalPrice => (
                <s.DropdownList>{rentalPrice}</s.DropdownList>
              ))}
          </s.Select>
        </s.LabelBoxPrice>
        <div>
          <s.Text>Car mileage / km</s.Text>
          <s.LabelBox>
            <label htmlFor="carMileageFrom">
              <s.InputMilea
                type="text"
                name="carMileageFrom"
                id="carMileageFrom"
                placeholder="From"
                value={`${mileageFrom}`}
                onChange={handleMileageFromChange}
              />
            </label>
            <label htmlFor="carMileageTo">
              <s.InputMilea
                type="text"
                name="carMileageTo"
                id="carMileageTo"
                placeholder="To"
                value={`${mileageTo}`}
                onChange={handleMileageToChange}
              />
            </label>
          </s.LabelBox>
        </div>
        <s.Button>Search</s.Button>
      </s.Form>
    </>
  );
};
