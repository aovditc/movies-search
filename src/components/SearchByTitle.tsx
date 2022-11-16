import React, { MutableRefObject, useCallback, useRef } from 'react';
import { Button, InputGroup } from 'react-bootstrap';
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
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  let debounceTimeout: MutableRefObject<NodeJS.Timeout | null | undefined> =
    useRef();

  const sendInputValue = useCallback(() => {
    if (inputRef.current) {
      const { value } = inputRef.current;

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
    <div className="search-by-title mt-4">
      <InputGroup>
        <span className="input-group-text" id="search-by-title">
          Search By Title:
        </span>
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="search-by-title"
          onChange={onInputChange}
          onKeyDown={onInputKeyDown}
          ref={inputRef}
        />
        <Button onClick={sendInputValue}>Search</Button>
      </InputGroup>
    </div>
  );
}

SearchByTitle.propTypes = {
  sendRequest: PropTypes.func.isRequired
};

export default SearchByTitle;
