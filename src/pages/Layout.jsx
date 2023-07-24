import { Outlet } from 'react-router-dom';

import { SearchBar } from 'components';

const Layout = () => {
  return (
    <>
      <SearchBar />
      <Outlet />
    </>
  );
};

export default Layout;
