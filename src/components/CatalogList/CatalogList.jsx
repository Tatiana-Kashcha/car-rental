import { CatalogListItems } from 'components/CatalogListItems/CatalogListItems';
import * as s from './CatalogList.styled';

export const CatalogList = ({ data }) => {
  return (
    <s.List>
      {data.map(car => (
        <s.ListItems key={car.id}>
          <CatalogListItems car={car} />
        </s.ListItems>
      ))}
    </s.List>
  );
};
