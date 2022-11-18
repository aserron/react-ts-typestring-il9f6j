import React, {
  useLayoutEffect,
  useEffect,
  useState,
  useMemo,
  useRef,
  useCallback,
  MouseEventHandler,
} from 'react';

const _idx = 0;

function useIter(
  str = ''
): [{ char: string }, { prev: (e) => void; onNext: (e) => void }] {
  // console.log('.');
  // console.log('useIter');

  const max = str.length;

  const [char, setChar] = useState({
    char: str[0],
    idx: 0,
  });

  // console.log('useIter: render > return', idx, char);

  const handlers = useMemo(
    () => ({
      prev: (e) => {
        setChar(({ idx: prev }) => {
          // console.log('useIter: prev p=', prev);
          let i = prev > 0 ? prev - 1 : max - 1;
          return { idx: i, char: str[i] };
        });
      },

      onNext: (e) => {
        setChar(({ idx: prev }) => {
          // console.log('useIter: Next prev=', prev);
          let i = prev < max - 1 ? prev + 1 : 0;
          return { idx: i, char: str[i] };
        });
      },
    }),
    []
  );

  console.log('useIter: render', char);

  return [char, handlers];
}

// const gene = useIterator('coco');

// console.clear();
// console.log(gene.curr.next())
// console.log(gene.curr.next())
// console.log(gene.curr.next())

export default useIter;
