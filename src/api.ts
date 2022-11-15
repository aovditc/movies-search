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
      }): movies | undefined => {
        if (response.Response === 'True') {
          return response.Search;
        }

        return undefined;
      }
    })
  })
});

export const { useGetMoviesQuery } = api;
export default api;
