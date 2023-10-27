import { useState, useEffect } from 'react';
import { getCatalogCar } from 'api/operations';
import { Section } from 'components/Section/Section';
import { CatalogList } from 'components/CatalogList/CatalogList';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { FilterCar } from 'components/FilterCar/FilterCar';
import { Message } from 'components/Message/Message';

const CatalogPage = () => {
  const [dataCatalog, setDataCatalog] = useState([]);
  const [filterCatalog, setFilterCatalog] = useState([]);
  const [inputBrand, setInputBrand] = useState('');
  const [inputPrice, setInputPrice] = useState('');
  const [mileageFrom, setMileageFrom] = useState('');
  const [mileageTo, setMileageTo] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const catalogCars = async () => {
      try {
        const response = await getCatalogCar();
        setDataCatalog(response.data);
        setFilterCatalog(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
        Loading.remove();
      }
    };
    catalogCars();
  }, []);

  const handleCange = evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'inputBrand':
        setInputBrand(value);
        break;

      case 'inputPrice':
        setInputPrice(value);
        break;

      case 'carMileageFrom':
        setMileageFrom(value);
        break;

      case 'carMileageTo':
        setMileageTo(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    const filterCar = dataCatalog
      .filter(({ make }) => make.includes(inputBrand))
      .filter(({ rentalPrice }) => rentalPrice.includes(inputPrice));

    setFilterCatalog(filterCar);
    console.log({ inputBrand, inputPrice, mileageFrom, mileageTo });
    console.log(filterCar);
  };

  const resetFilters = () => {
    setInputBrand('');
    setInputPrice('');
    setMileageFrom('');
    setMileageTo('');
    clearSelect();
    setFilterCatalog(dataCatalog);
    console.log({ inputBrand, inputPrice, mileageFrom, mileageTo });
  };

  function clearSelect() {
    let selectInputBrand = document.getElementById('inputBrandText');
    let selectInputPrice = document.getElementById('inputPriceTo');
    selectInputBrand.innerHTML += '';
    selectInputPrice.innerHTML += '';
  }

  return (
    <>
      <Section>
        {isLoading && Loading.arrows()}

        <FilterCar
          data={dataCatalog}
          handleSubmit={handleSubmit}
          handleCange={handleCange}
          resetFilters={resetFilters}
          mileageFrom={mileageFrom}
          mileageTo={mileageTo}
        />
        {!filterCatalog.length && (
          <Message text="Sorry, there are no machines with such parameters!" />
        )}
        <CatalogList data={filterCatalog} />
      </Section>
    </>
  );
};
export default CatalogPage;
