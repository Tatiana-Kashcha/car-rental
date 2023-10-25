import { useState } from 'react';
import * as s from './FilterCar.styled';

export const FilterCar = ({ data }) => {
  const [inputValue] = useState('');
  const [inputPriceValue] = useState('');

  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  const uniqueMakes = [...new Set(data.map(car => car.make))];
  const uniquePrice = [...new Set(data.map(car => car.rentalPrice))];

  const handleChangeMileageFrom = evt =>
    setMileageFrom(evt.currentTarget.value);
  const handleChangeMileageTo = evt => setMileageTo(evt.currentTarget.value);

  const handleSubmit = evt => {
    evt.preventDefault();
    console.log({ mileageFrom, mileageTo });
  };

  return (
    <s.Form onSubmit={handleSubmit}>
      <s.LabelBoxMake>
        <label htmlFor="inputBrandText">
          <s.Text>Car brand</s.Text>
        </label>
        <s.Select type="select" name="inputBrand" id="inputBrandText">
          <option value="">Enter the text</option>
          {uniqueMakes

            .filter(
              make =>
                make && make.toLowerCase().startsWith(inputValue.toLowerCase())
            )
            .map(make => (
              <s.DropdownList value="make">{make}</s.DropdownList>
            ))}
        </s.Select>
      </s.LabelBoxMake>
      <s.LabelBoxPrice>
        <label htmlFor="inputPriceTo">
          <s.Text>Price/ 1 hour</s.Text>
        </label>
        <s.Select type="select" name="inputPric" id="inputPriceTo">
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
              <s.DropdownList value="rentalPrice">{rentalPrice}</s.DropdownList>
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
