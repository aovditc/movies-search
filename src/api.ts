import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import config from './config';

import { movies } from './components/MoviesTable';

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: config.baseUrl }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: ({ title }) => ({
        url: `/`,
        params: { s: title, apikey: config.apiKey }
      }),
      transformResponse: (response: {
        Response: string;
        Search: movies;
        Error: string | undefined;
      }): movies | undefined => {
        if (response.Response === 'True') {
          return response.Search;
        } else {
          throw Error(response.Error);
        }

        return undefined;
      }
    })
  })
});

export const { useGetMoviesQuery } = api;
export default api;
