import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { Header } from 'components/Header/Header';
import { useState } from 'react';
import * as s from './Layout.styled';

export const Layout = () => {
  const [showSideBar, setShowSideBar] = useState();

  const onSideBar = () => {
    setShowSideBar(prevState => !prevState);
  };

  return (
    <s.Container>
      {showSideBar && <Sidebar onSideBar={onSideBar} />}
      <Header onSideBar={onSideBar} />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </s.Container>
  );
};
