import { useEffect, useRef } from 'react';

import s from './InfiniteScroll.module.css';

export const InfiniteScroll = ({ setCurrentPage, isFetching }) => {
  const observerTarget = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setCurrentPage(prevPage => prevPage + 1);
        }
      },
      { threshold: 1 }
    );

    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }

    return () => {
      if (observerTarget.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget, setCurrentPage]);

  return (
    <>
      {isFetching && <p className={s.loader}>Loading...</p>}
      <div ref={observerTarget}></div>
    </>
  );
};
