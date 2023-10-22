import axios from 'axios';

axios.defaults.baseURL = 'https://64bac8885e0670a501d6a6fc.mockapi.io';

export const getCatalogCar = async () => {
  return axios.get('/adverts');
};

export const getCatalogCarById = async id => {
  return axios.get(`/adverts/${id}`);
};
