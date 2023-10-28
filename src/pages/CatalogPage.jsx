import { useState, useEffect } from 'react';
import { getCatalogCar } from 'api/operations';
import { Section } from 'components/Section/Section';
import { CatalogList } from 'components/CatalogList/CatalogList';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { FilterCar } from 'components/FilterCar/FilterCar';
import { Message } from 'components/Message/Message';
import { clearSelect } from 'helpers/clearSelect';

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

  const handleChange = evt => {
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

  const filterMakeCar = dataCatalog.filter(({ make }) =>
    make.includes(inputBrand)
  );

  const filterPriceCar = filterMakeCar.filter(
    ({ rentalPrice }) => rentalPrice === inputPrice
  );

  const handleSubmit = evt => {
    evt.preventDefault();

    if (!inputPrice) {
      setFilterCatalog(filterMakeCar);
      return;
    }
    // const filterCar = filterRentalPriceCar.filter(
    //   ({ mileage }) => (mileage > mileageFrom) & (mileage < mileageTo)
    // );

    setFilterCatalog(filterPriceCar);
    console.log({ inputBrand, inputPrice, mileageFrom, mileageTo });
  };

  const resetFilters = () => {
    setInputBrand('');
    setInputPrice('');
    setMileageFrom('');
    setMileageTo('');
    clearSelect();
    setFilterCatalog(dataCatalog);
  };

  return (
    <>
      <Section>
        {isLoading && Loading.arrows()}

        <FilterCar
          data={dataCatalog}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
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
