export const parseAddress = address => {
  const arr = address.split(', ');
  const city = arr[1];
  const country = arr[arr.length - 1];
  return { city, country };
};

export const getCarData = car => {
  const { type, mileage, functionalities } = car;
  return { type, mileage, functionalities };
};

export const getLocationData = (address, car) => {
  const { city, country } = parseAddress(address);
  const { rentalCompany } = car;
  return [city, country, rentalCompany];
};

export const parseConditions = rentalConditions => {
  const arr = rentalConditions.split('\n');
  const age = arr[arr.length - 1];
  return { arr, age };
};
