import { useState, useEffect, useCallback } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import { apiUnsplash } from 'services/apiUnsplash';

import { ColumnCountBtn, ImagesGallery, InfiniteScroll } from 'components';

const HomePage = () => {
  const [columnCount, setColumnCount] = useState(3);
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  // const [totalCount, setTotalCount] = useState(0);
  const { tag } = useParams();
  const query = searchParams.get('query') ?? '';

  const fetchImages = useCallback(() => {
    setFetching(true);
    if (tag) return apiUnsplash.getImagesByTag(tag, currentPage);
    if (query) return apiUnsplash.getImagesByQuery(query, currentPage);
    return apiUnsplash.getImages(currentPage);
  }, [currentPage, query, tag]);

  useEffect(() => {
    if (query) {
      setImages([]);
      setCurrentPage(1);
      setFetching(true);
    }
  }, [query]);

  useEffect(() => {
    if (fetching) {
      fetchImages()
        .then(data => {
          setImages(prevImages => [...new Set([...prevImages, ...data])]);
          setCurrentPage(prevState => prevState + 1);
          // setTotalCount(resp.headers['x-total']);
        })
        .finally(() => {
          setFetching(false);
        });
    }
  }, [fetching, query, tag, fetchImages]);

  return (
    <main>
      <ColumnCountBtn
        columnCount={columnCount}
        setColumnCount={setColumnCount}
      />
      <InfiniteScroll setFetching={setFetching}>
        <ImagesGallery columnCount={columnCount} images={images} />;
      </InfiniteScroll>
    </main>
  );
};

export default HomePage;
