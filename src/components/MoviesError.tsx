import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { Alert } from 'react-bootstrap';

import React from 'react';
import PropTypes from 'prop-types';

interface SerializedError {
  name?: string;
  message?: string;
  stack?: string;
  code?: string;
}

function MoviesError({
  error
}: {
  error: FetchBaseQueryError | SerializedError;
}): React.ReactElement {
  let errorMessage;

  if ('status' in error) {
    errorMessage = 'error' in error ? error.error : JSON.stringify(error.data);
  } else {
    errorMessage = error.message;
  }

  return (
    <Alert key="danger" variant="danger" className="mt-4 mb-4">
      {errorMessage}
    </Alert>
  );
}

MoviesError.propTypes = {
  error: PropTypes.shape({
    message: PropTypes.string
  }).isRequired
};

export default MoviesError;
