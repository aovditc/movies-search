import React, { Fragment } from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

import Image from './Image';

declare type movies = Array<{
  Title: string;
  Year: string;
  Poster: string;
}>;

function MoviesTable({
  movies
}: {
  movies: movies | undefined;
}): React.ReactElement {
  return (
    <div className="movies-table-container mt-4">
      <Table
        striped
        bordered
        hover
        aria-label="Movies table"
        className="movies-table"
      >
        <thead>
          <tr>
            <th>Poster</th>
            <th>Title</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {movies?.map((movie) => (
            <tr key={`${movie.Poster}${movie.Title}`}>
              <td>
                {movie.Poster === 'N/A' ? (
                  'N/A'
                ) : (
                  <Image src={movie.Poster} title={movie.Title} />
                )}
              </td>
              <td align="right">{movie.Title}</td>
              <td align="right">{movie.Year}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

MoviesTable.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      poster: PropTypes.string,
      title: PropTypes.string,
      year: PropTypes.string
    })
  )
};

export { type movies };
export default MoviesTable;
