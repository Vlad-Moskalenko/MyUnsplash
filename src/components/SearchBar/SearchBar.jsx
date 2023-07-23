import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

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
    <header>
      <form onSubmit={handleSearchImages}>
        <button type="submit">
          <span>Search</span>
        </button>
        <input
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </form>
    </header>
  );
};
