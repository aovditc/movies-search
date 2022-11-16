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
      <header>
        <h1>Movies Catalog</h1>
      </header>
      <nav>
        <SearchByTitle sendRequest={updateTitle} />
      </nav>
      <main>
        {moviesError && <MoviesError error={moviesError} />}
        {movies && <MoviesTable movies={movies} />}
      </main>
    </div>
  );
}

export default App;
