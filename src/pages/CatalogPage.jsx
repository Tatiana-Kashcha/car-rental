import { useState, useEffect } from 'react';
import { getCatalogCar } from 'api/operations';
import { Section } from 'components/Section/Section';
import { CatalogList } from 'components/CatalogList/CatalogList';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { FilterCar } from 'components/FilterCar/FilterCar';

const CatalogPage = () => {
  const [dataCatalog, setDataCatalog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <>
      <Section>
        {isLoading && Loading.arrows()}

        <FilterCar data={dataCatalog} />
        <CatalogList data={dataCatalog} />
      </Section>
    </>
  );
};
export default CatalogPage;
