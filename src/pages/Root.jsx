import { Outlet } from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className="m-auto my-28 text-center">
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;