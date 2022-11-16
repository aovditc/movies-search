import React, { Fragment } from 'react';
import {
  Paper,
  Input,
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  TableCell
} from '@mui/material';
import PropTypes from 'prop-types';

import Image from './Image';

import '../styles/MoviesTable.scss';

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
    <div className="movies-table-container">
      {!movies || movies?.length === 0 ? (
        <Fragment>
          <span>No movies found.</span>
        </Fragment>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="Movies table">
            <TableHead>
              <TableRow>
                <TableCell>Poster</TableCell>
                <TableCell align="right">Title</TableCell>
                <TableCell align="right">Year</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {movies?.map((movie) => (
                <TableRow key={movie.Poster}>
                  <TableCell>
                    {movie.Poster === 'N/A' ? (
                      'N/A'
                    ) : (
                      <Image src={movie.Poster} title={movie.Title} />
                    )}
                  </TableCell>
                  <TableCell align="right">{movie.Title}</TableCell>
                  <TableCell align="right">{movie.Year}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
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
