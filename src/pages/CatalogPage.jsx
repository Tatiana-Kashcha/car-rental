import { useState, useEffect } from 'react';
import { getCatalogCar } from 'api/operations';
import { Section } from 'components/Section/Section';
import { CatalogList } from 'components/CatalogList/CatalogList';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

const CatalogPage = () => {
  const [dataCatalog, setDataCatalog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const carPerPage = 8;

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
      <Section title="Catalog page">
        {isLoading && Loading.arrows()}
        {carPerPage > 0 && <CatalogList data={dataCatalog} />}
      </Section>
    </>
  );
};
export default CatalogPage;
