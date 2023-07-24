import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useSearchParams } from 'react-router-dom';

import s from './SearchBar.module.css';

export const SearchBar = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('query') || '');

  const handleSearchImages = e => {
    e.preventDefault();

    if (!query) {
      alert('Please write a query before');
      return;
    }

    navigate('/');
    setSearchParams({ query });
  };

  return (
    <header className={s.searchBar}>
      <Link className={s.homeLink} to="/">
        Home
      </Link>
      <form className={s.searchForm} onSubmit={handleSearchImages}>
        <input
          className={s.searchInput}
          type="text"
          autoComplete="off"
          name="query"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button className={s.searchBtn} type="submit">
          search
        </button>
      </form>
    </header>
  );
};
