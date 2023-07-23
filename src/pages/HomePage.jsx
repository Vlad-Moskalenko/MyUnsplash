import { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import { ColumnCountBtn } from 'components/ColumnCountBtn/ColumnCountBtn';
import { ImagesGallery } from 'components/ImagesGallery/ImagesGallery';
import { apiUnsplash } from 'services/apiUnsplash';
import { InfiniteScroll } from 'components/InfiniteScroll/InfiniteScroll';

const HomePage = () => {
  const [columnCount, setColumnCount] = useState(3);
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  const [searchParams] = useSearchParams();
  // const [totalCount, setTotalCount] = useState(0);
  const { tag } = useParams();
  const query = searchParams.get('query');

  const fetchImages = () => {
    setFetching(true);
    if (tag) return apiUnsplash.getImagesByTag(tag, currentPage);
    if (query) return apiUnsplash.getImagesByQuery(query, currentPage);
    return apiUnsplash.getImages(currentPage);
  };

  useEffect(() => {
    if (fetching) {
      fetchImages()
        .then(data => {
          setImages(prevImages => [...prevImages, ...data]);
          setCurrentPage(prevState => prevState + 1);
          // setTotalCount(resp.headers['x-total']);
        })
        .finally(() => {
          setFetching(false);
        });
    }
  }, [fetching, images, currentPage, query, tag]);

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
