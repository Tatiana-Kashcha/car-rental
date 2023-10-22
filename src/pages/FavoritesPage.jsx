import { useState, useEffect } from 'react';
import { getCatalogCarById } from 'api/operations';
import { Section } from 'components/Section/Section';
import { CatalogList } from 'components/CatalogList/CatalogList';
import { Message } from 'components/Message/Message';
import { Loading } from 'notiflix/build/notiflix-loading-aio';
import { useFavorites } from 'hooks/useFavorites';

const FavoritesPage = () => {
  const [favorites] = useFavorites();
  const [dataFavoriteCar, setDataFavoriteCar] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const catalogFavoriteCars = async () => {
      try {
        const promises = favorites.map(id => getCatalogCarById(id));

        const responses = await Promise.all(promises);

        const favoriteCar = responses.map(response => response.data);

        setDataFavoriteCar(favoriteCar);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
        Loading.remove();
      }
    };
    catalogFavoriteCars();
  }, [favorites]);

  return (
    <>
      <Section>
        {isLoading && Loading.arrows()}
        {!favorites.length && (
          <Message text="You don't have any favorite cars yet!" />
        )}
        {favorites.length > 0 && <CatalogList data={dataFavoriteCar} />}
      </Section>
    </>
  );
};
export default FavoritesPage;
