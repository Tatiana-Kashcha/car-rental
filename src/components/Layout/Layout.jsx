import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import * as s from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <s.Sidebar>
        <s.Container>
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
        </s.Container>
      </s.Sidebar>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
