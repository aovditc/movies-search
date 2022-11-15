import React, { useState } from 'react';

import { useGetMoviesQuery } from '../api';

import SearchByTitle from './SearchByTitle';
import MoviesTable from './MoviesTable';

import '../styles/App.scss';

function App() {
  // TODO: check type annotations if they are correct
  const [title, setTitle] = useState<String | undefined>('Friends');
  const { data: movies } = useGetMoviesQuery({ title });

  const updateTitle = (value: String) => {
    setTitle(value);
  };

  return (
    <div className="app">
      <h1>Movies Catalog</h1>
      <SearchByTitle sendRequest={updateTitle} />
      <MoviesTable movies={movies} />
    </div>
  );
}

export default App;
