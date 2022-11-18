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

function useIteratorOld(
  str = ''
): [{ char: string }, { prev: (e) => void; onNext: (e) => void }] {
  console.log('.');
  console.log('useIterator');

  const max = str.length;

  const [char, setChar] = useState({ char: str[0] });
  const [idx, setIdx] = useState({ idx: _idx });

  // console.log('useIter: render > return', idx, char);

  const handlers = useMemo(
    () => ({
      prev: (e) => {
        setIdx(({ idx: prev }) => {
          console.log('useIter: prev p=', prev);

          let i = prev > 0 ? prev - 1 : max - 1;

          return { idx: i };
        });
      },

      onNext: (e) => {
        setIdx(({ idx: prev }) => {
          console.log('useIter: Next prev=', prev);
          let i = prev < max - 1 ? prev + 1 : 0;
          return { idx: i };
        });
      },
    }),
    []
  );

  useEffect(() => {
    console.log('useIter: useEffect', idx, str[idx.idx]);
    setChar((prev) => {
      return { char: str[idx.idx] };
    });
  }, [idx]);

  console.log('useIter: render', idx, char);

  return [char, handlers];
}

// const gene = useIterator('coco');

// console.clear();
// console.log(gene.curr.next())
// console.log(gene.curr.next())
// console.log(gene.curr.next())

export default useIterator;
