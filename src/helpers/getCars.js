/**
 * Фільтрує масив машин за маркою
 * @param {cars, input} cars- масив машин, input - марка машини
 * @returns масив відфільтрованих машин
 */
export const getCarsByMake = (cars, input) =>
  cars.filter(({ make }) => make.includes(input));

/**
 * Фільтрує масив машин за ціною
 * @param {cars, input} cars- масив машин, input - ціна машини
 * @returns масив відфільтрованих машин
 */
export const getCarsByPrice = (cars, input) =>
  cars.filter(({ rentalPrice }) => rentalPrice === input);

/**
 * Фільтрує масив машин за пробігом
 * @param {cars, inputFrom, inputTo} cars- масив машин,
 * inputFrom - пробіг машини від...,  inputTo - пробіг машини до...
 * @returns масив відфільтрованих машин
 */
export const getCarsByMileage = (cars, inputFrom, inputTo) =>
  cars.filter(({ mileage }) => (mileage > inputFrom) & (mileage < inputTo));
