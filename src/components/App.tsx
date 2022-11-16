import React, { useState } from 'react';

import { useGetMoviesQuery } from '../api';

import SearchByTitle from './SearchByTitle';
import MoviesTable from './MoviesTable';
import MoviesError from './MoviesError';

import '../styles/App.scss';

declare type moviesError = {
  message: string;
};

function App() {
  // TODO: check type annotations if they are correct
  const [title, setTitle] = useState<string | undefined>('Toy Story');
  const { data: movies, error: moviesError } = useGetMoviesQuery({ title });

  const updateTitle = (value: string) => {
    setTitle(value);
  };

  return (
    <div className="app mt-4">
      <h1>Movies Catalog</h1>
      <SearchByTitle sendRequest={updateTitle} />
      {moviesError && <MoviesError error={moviesError} />}
      {movies && <MoviesTable movies={movies} />}
    </div>
  );
}

export default App;
