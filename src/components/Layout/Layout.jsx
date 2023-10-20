import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
// import * as s from './Layout.styled';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { Header } from 'components/Header/Header';
import { useState } from 'react';

export const Layout = () => {
  const [showSideBar, setShowSideBar] = useState();

  const onSideBar = () => {
    setShowSideBar(prevState => !prevState);
  };

  return (
    <>
      {showSideBar && <Sidebar onSideBar={onSideBar} />}
      <Header onSideBar={onSideBar} />
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
