import * as s from './FilterCar.styled';

export const FilterCar = ({
  data,
  handleSubmit,
  handleChange,
  resetFilters,
  mileageFrom,
  mileageTo,
}) => {
  const uniqueMakes = [...new Set(data.map(car => car.make))];
  const uniquePrice = [...new Set(data.map(car => car.rentalPrice))];

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
          onChange={handleChange}
        >
          <option value="">Enter the text</option>
          {uniqueMakes.sort().map(make => (
            <s.DropdownList key={`${make}`} value={`${make}`}>
              {make}
            </s.DropdownList>
          ))}
        </s.Select>
      </s.LabelBoxMake>
      <s.LabelBoxPrice>
        <label htmlFor="inputPriceTo">
          <s.Text>Price/ 1 hour</s.Text>
        </label>
        <s.Select
          type="select"
          name="inputPrice"
          id="inputPriceTo"
          onChange={handleChange}
        >
          <option value="">To $</option>
          {uniquePrice.sort().map(rentalPrice => (
            <s.DropdownList key={`${rentalPrice}`} value={`${rentalPrice}`}>
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
              type="number"
              name="carMileageFrom"
              id="carMileageFrom"
              placeholder="From"
              value={mileageFrom}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="carMileageTo">
            <s.InputMilea
              type="number"
              name="carMileageTo"
              id="carMileageTo"
              placeholder="To"
              value={mileageTo}
              onChange={handleChange}
            />
          </label>
        </s.LabelBoxMileage>
      </s.LabelBox>

      <s.Button type="submit">
        {' '}
        <s.IconSearchBtn />
        Search
      </s.Button>
      <s.Button type="button" onClick={resetFilters}>
        Reset filters
      </s.Button>
    </s.Form>
  );
};
