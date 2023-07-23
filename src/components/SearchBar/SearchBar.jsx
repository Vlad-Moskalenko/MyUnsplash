import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import s from './SearchBar.module.css';

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleSearchImages = e => {
    e.preventDefault();
    navigate('/');
    setSearchParams({ query });
  };

  return (
    <header className={s.searchBar}>
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
