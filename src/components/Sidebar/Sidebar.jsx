import * as s from './Sidebar.styled';

export const Sidebar = () => {
  return (
    <div>
      <s.Container>
        <s.Sidebar>
          <s.List>
            <li>
              <s.StyledLink to="/">Home</s.StyledLink>
            </li>
            <li>
              <s.StyledLink to="/catalog">Catalog</s.StyledLink>
            </li>
            <li>
              <s.StyledLink to="/favorites">Favorites</s.StyledLink>
            </li>
          </s.List>
        </s.Sidebar>
      </s.Container>
    </div>
  );
};
