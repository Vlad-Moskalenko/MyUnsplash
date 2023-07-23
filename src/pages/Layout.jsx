import { SearchBar } from 'components/SearchBar/SearchBar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <SearchBar />
      <Outlet />
    </>
  );
};

export default Layout;
