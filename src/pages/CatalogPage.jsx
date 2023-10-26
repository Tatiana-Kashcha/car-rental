import { useState, useEffect } from 'react';
import { getCatalogCar } from 'api/operations';
import { Section } from 'components/Section/Section';
import { CatalogList } from 'components/CatalogList/CatalogList';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { FilterCar } from 'components/FilterCar/FilterCar';
import { useFiltersCars } from 'hooks/useFiltersCars';

const CatalogPage = () => {
  const [dataCatalog, setDataCatalog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [, , mileageFrom, mileageTo, inputBrand, inputPrice] =
    useFiltersCars(dataCatalog);

  useEffect(() => {
    setIsLoading(true);

    const catalogCars = async () => {
      try {
        const response = await getCatalogCar();
        setDataCatalog(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
        Loading.remove();
      }
    };
    catalogCars();
  }, []);

  const handleSubmit = evt => {
    evt.preventDefault();

    const filterCar = dataCatalog
      .filter(({ make }) => make.includes(inputBrand))
      .filter(({ rentalPrice }) => rentalPrice.includes(inputPrice));

    setDataCatalog(filterCar);
    console.log({ inputBrand, inputPrice, mileageFrom, mileageTo });
    console.log(filterCar);
  };

  return (
    <>
      <Section>
        {isLoading && Loading.arrows()}
        <FilterCar data={dataCatalog} handleSubmit={handleSubmit} />
        <CatalogList data={dataCatalog} />
      </Section>
    </>
  );
};
export default CatalogPage;
