import { CatalogListItems } from 'components/CatalogListItems/CatalogListItems';
import * as s from './CatalogList.styled';
import { useState } from 'react';

export const CatalogList = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToShow = data.slice(0, endIndex);

  const loadMore = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  return (
    <>
      <s.List>
        {itemsToShow.map(car => (
          <s.ListItems key={car.id}>
            <CatalogListItems car={car} />
          </s.ListItems>
        ))}
      </s.List>
      {data.length > endIndex && (
        <s.LoadMore onClick={loadMore}>Load more</s.LoadMore>
      )}
    </>
  );
};
