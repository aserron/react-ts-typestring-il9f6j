import axios from 'axios';
import React, { useEffect, useCallback } from 'react';
import useIterator from './hooks/useIterator';

export const IteratorTest = ({ str = 'helloworld' }) => {
  //
  console.log(`IteratorTest:`);

  const [{ char }, { onNext, prev }] = useIterator(str);

  const hdlPrev = useCallback(
    (event) => {
      prev();
    },
    [char]
  );
  const hdlNext = useCallback(
    (event) => {
      onNext();
    },
    [char]
  );

  console.log(`IteratorTest: render`, char);

  return (
    <div>
      {/* Highlight the char that match the  in the string*/}
      <p>
        Test string <i>{str}</i>
      </p>
      {/* Display the current char*/}
      <p>
        Current Character? <b>{char}</b>
      </p>

      {/* implement the next functionality */}
      <button onClick={hdlNext}>Next</button>
      {/* implement the Previous functionality */}
      <button onClick={hdlPrev}>Previous</button>
    </div>
  );
};
