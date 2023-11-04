import * as s from './CarDetails.styled';
import { parseConditions } from '../../utils/parse';

const phoneNumber = '+380730000000';

export const CarDetails = ({
  car: {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    address,
    rentalConditions,
    mileage,
  },
}) => {
  return (
    <s.Details>
      <s.Thumb>
        <s.Img src={img} alt="Car" />
      </s.Thumb>

      <s.Title>
        {make} <s.AccentTitle>{model}</s.AccentTitle>, {year}
      </s.Title>
      <s.Info>
        <div>
          {address} | id: {id} | year: {year} | Type: {type}
        </div>
        <div>
          Fuel Consumption: {fuelConsumption} | Engine Size:
          {engineSize}
        </div>
      </s.Info>
      <s.Description>{description}</s.Description>
      <s.Chapter>Accessories and functionalities:</s.Chapter>
      <s.Info>
        <div>
          {accessories[0]} | {accessories[1]} | {accessories[2]}
        </div>
        <div>
          {functionalities[0]} | {functionalities[1]} |{functionalities[2]}
        </div>
      </s.Info>
      <s.Chapter>Rental Conditions:</s.Chapter>
      <s.Conditions>
        <s.Box>
          Minimum age:{' '}
          <s.Accent>{parseConditions(rentalConditions).age}</s.Accent>
        </s.Box>
        <s.Box>{parseConditions(rentalConditions).arr[1]}</s.Box>
      </s.Conditions>
      <s.Conditions>
        <s.Box>{parseConditions(rentalConditions).arr[2]}</s.Box>
        <s.Box>
          Mileage: <s.Accent>{(mileage / 1000).toFixed(3)}</s.Accent>
        </s.Box>
        <s.Box>
          Price: <s.Accent>{rentalPrice}</s.Accent>
        </s.Box>
      </s.Conditions>
      <s.Button>
        <s.LinkToContact href={`tel:${phoneNumber}`}>
          Rental car
        </s.LinkToContact>
      </s.Button>
    </s.Details>
  );
};
