import { useState, useEffect } from 'react';
import { getCatalogCar } from 'api/getCatalogCar';
import { Section } from 'components/Section/Section';
import { CatalogList } from 'components/CatalogList/CatalogList';
import { CatalogListItems } from 'components/CatalogListItems/CatalogListItems';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const CatalogPage = () => {
  const [dataCatalog, setDataCatalog] = useState([]);
  const [carPerPage, setCarPerPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    getCatalogCar(1)
      .then(({ data: { results } }) => {
        setDataCatalog([...results]);
        setCarPerPage(results.length);

        if (!results.length) {
          Notify.failure('Sorry, car not found.');
        }
      })
      .catch(err => {
        console.log('ERROR', err);
      })
      .finally(() => {
        setIsLoading(false);
        Loading.remove();
      });
  }, []);

  return (
    <>
      <Section title="Catalog page">
        {isLoading && Loading.arrows()}
        {carPerPage > 0 && <CatalogList data={dataCatalog} />}
        <CatalogListItems />
      </Section>
    </>
  );
};
export default CatalogPage;
