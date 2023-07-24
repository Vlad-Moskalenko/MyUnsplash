import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import { apiUnsplash } from 'services/apiUnsplash';

import { ColumnCountBtn, ImagesGallery, InfiniteScroll } from 'components';

const HomePage = () => {
  const [columnCount, setColumnCount] = useState(3);
  const [error, setError] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchParams] = useSearchParams();
  const { tag } = useParams();
  const query = searchParams.get('query') ?? '';

  const fetchImages = () => {
    switch (true) {
      case !!query:
        return apiUnsplash.getImagesByQuery(query, currentPage);
      case !!tag:
        return apiUnsplash.getImagesByTag(tag, currentPage);
      default:
        return apiUnsplash.getImages(currentPage);
    }
  };

  useEffect(() => {
    setCurrentPage(1);
    setImages([]);
  }, [query, tag]);

  useEffect(() => {
    setIsFetching(true);
    fetchImages()
      .then(data => {
        setImages(prevImages => [...new Set([...prevImages, ...data])]);
        setError(null);
      })
      .catch(err => setError(err.response.data))
      .finally(() => setIsFetching(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <main>
      <ColumnCountBtn
        columnCount={columnCount}
        setColumnCount={setColumnCount}
      />
      <ImagesGallery columnCount={columnCount} images={images} />
      <InfiniteScroll setCurrentPage={setCurrentPage} isFetching={isFetching} />
      <p className="error">{error}</p>
    </main>
  );
};

export default HomePage;
