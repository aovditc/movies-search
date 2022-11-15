import React, { MutableRefObject, useCallback, useRef } from 'react';
import { Button, Input } from '@mui/material';
// @ts-ignore
import { NodeJS } from 'node:timers';
import PropTypes from 'prop-types';

import '../styles/SearchByTitle.scss';

const DEBOUNCE_MS = 1500; // 1.5 sec
const ENTER_KEY = 'Enter';

interface SearchByTitleInput {
  sendRequest: (value: string) => void;
}

function SearchByTitle({
  sendRequest
}: SearchByTitleInput): React.ReactElement {
  const inputRef = useRef();
  let debounceTimeout: MutableRefObject<NodeJS.Timeout | null | undefined> =
    useRef();

  const sendInputValue = useCallback(() => {
    if (inputRef.current) {
      // @ts-ignore
      const { value } = inputRef.current.firstChild;

      sendRequest(value);
    }
  }, [sendRequest]);

  const onInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }

      debounceTimeout.current = setTimeout(sendInputValue, DEBOUNCE_MS);
    },
    [sendInputValue]
  );

  const onInputKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === ENTER_KEY) {
        sendInputValue();
      }
    },
    [sendInputValue]
  );

  return (
    <div className="search-by-title">
      <label htmlFor="search-by-title">Search By Title:</label>
      <Input
        id="search-by-title"
        className="movie-title-input"
        onChange={onInputChange}
        onKeyDown={onInputKeyDown}
        ref={inputRef}
      />
      <Button variant="outlined" onClick={sendInputValue}>
        Search
      </Button>
    </div>
  );
}

SearchByTitle.propTypes = {
  sendRequest: PropTypes.func.isRequired
};

export default SearchByTitle;
