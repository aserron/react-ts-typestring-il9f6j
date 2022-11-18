import React, { useState, useEffect } from 'react';

export function useShow(str = '') {
  const max = str.length;

  const [index, setIndex] = useState(0);

  return {
    curr: str[index],

    next: () => {
      setIndex((prev) => (prev < max ? prev + 1 : 0));
    },
    prev: () => {
      setIndex((prev) => (prev >= 0 ? prev - 1 : max - 1));
    },
  };
}


export default useShow;