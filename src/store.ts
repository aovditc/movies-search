/**
 * Licensed Materials - Property of IBM
 * (c) Copyright IBM Corporation 2022. All Rights Reserved.
 * Note to U.S. Government Users Restricted Rights:
 * Use, duplication or disclosure restricted by GSA ADP Schedule
 * Contract with IBM Corp.
 */

import { configureStore } from '@reduxjs/toolkit';

import api from './api';

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
});

export default store;
