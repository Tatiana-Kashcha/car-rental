import { useState } from 'react';
import * as s from './FilterCar.styled';

export const FilterCar = ({ data }) => {
  const [inputValue, setInputValue] = useState('');
  const [isListOpen, setIsListOpen] = useState(false);
  const [setSelectedCar] = useState(null);

  const [inputPriceValue, setInputPriceValue] = useState('');
  const [isListPriceOpen, setIsListPriceOpen] = useState(false);
  const [, setSelectedPriceCar] = useState(null);

  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');

  const uniqueMakes = [...new Set(data.map(car => car.make))];
  const uniquePrice = [...new Set(data.map(car => car.rentalPrice))];

  const handleInputChange = e => {
    e.preventDefault();
    setInputValue(e.target.value);
    setIsListOpen(true);
  };

  const toggleList = () => {
    setIsListOpen(!isListOpen);
  };

  const handleCarSelect = carMake => {
    setInputValue(carMake);
    setSelectedCar(carMake);
    setIsListOpen(false);
  };

  const handleInputPriceChange = e => {
    e.preventDefault();
    setInputPriceValue(e.target.value);
    setIsListPriceOpen(true);
  };

  const togglePriceList = () => {
    setIsListPriceOpen(!isListPriceOpen);
  };

  const handleCarPriceSelect = rentalPrice => {
    setInputPriceValue(rentalPrice);
    setSelectedPriceCar(rentalPrice);
    setIsListPriceOpen(false);
  };

  const handleMileageFromChange = e => {
    e.preventDefault();
    setMileageFrom(e.target.value);
  };

  const handleMileageToChange = e => {
    e.preventDefault();
    setMileageTo(e.target.value);
  };

  return (
    <>
      <s.Form>
        <label htmlFor="inputBrandText">
          <s.Text>Car brand</s.Text>
          <s.LabelBox>
            {' '}
            <s.InputBrand
              placeholder="Enter the text"
              type="text"
              name="inputBrandText"
              id="inputBrandText"
              value={inputValue}
              onChange={handleInputChange}
            />
            <select type="select" onClick={toggleList}></select>{' '}
            {isListOpen ? <s.ChevronUp /> : <s.ChevronDown />}
          </s.LabelBox>
        </label>
        {isListOpen && (
          <s.DropdownList>
            {uniqueMakes
              .filter(
                make =>
                  make &&
                  make.toLowerCase().startsWith(inputValue.toLowerCase())
              )
              .map((make, index) => (
                <li key={index} onClick={() => handleCarSelect(make)}>
                  {make}
                </li>
              ))}
          </s.DropdownList>
        )}
        <label htmlFor="inputPriceTo">
          <s.Text>Price/ 1 hour</s.Text>
          <s.LabelBox>
            <s.InputPrice
              placeholder="To $"
              type="text"
              name="inputPriceTo"
              id="inputPriceTo"
              value={inputPriceValue}
              onChange={handleInputPriceChange}
            />
            <select type="select" onClick={togglePriceList}></select>
            {isListPriceOpen ? <s.ChevronUp /> : <s.ChevronDown />}
          </s.LabelBox>
        </label>
        {isListPriceOpen && (
          <s.DropdownPriceList>
            {uniquePrice
              .filter(
                rentalPrice =>
                  rentalPrice &&
                  rentalPrice
                    .toLowerCase()
                    .startsWith(inputPriceValue.toLowerCase())
              )
              .map((rentalPrice, index) => (
                <li
                  key={index}
                  onClick={() => handleCarPriceSelect(rentalPrice)}
                >
                  {rentalPrice}
                </li>
              ))}
          </s.DropdownPriceList>
        )}
        <div>
          {/* <label htmlFor="carMileageFrom"> */}
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
