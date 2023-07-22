import { ColumnCountBtn } from 'components/ColumnCountBtn/ColumnCountBtn';
import { ImagesGallery } from 'components/ImagesGallery/ImagesGallery';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { apiUnsplash } from 'services/apiUnsplash';

const HomePage = () => {
  const [columnCount, setColumnCount] = useState(3);
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [fetching, setFetching] = useState(true);
  // const [totalCount, setTotalCount] = useState(0);
  const { tag } = useParams();

  const fetchImages = tag
    ? apiUnsplash.getImagesByTag(tag, currentPage)
    : apiUnsplash.getImages(currentPage);

  useEffect(() => {
    if (fetching) {
      fetchImages
        .then(data => {
          setImages(prevImages => [...prevImages, ...data]);
          setCurrentPage(prevState => prevState + 1);
          // setTotalCount(resp.headers['x-total']);
        })
        .finally(() => {
          setFetching(false);
        });
    }
  }, [fetching, images, currentPage]);

  useEffect(() => {
    document.addEventListener('scroll', scrollHandler);
    return () => {
      document.removeEventListener('scroll', scrollHandler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollHandler = e => {
    const scrollHeight = e.target.documentElement.scrollHeight;
    const scrollTop = e.target.documentElement.scrollTop;
    const innerHeight = window.innerHeight;

    if (scrollHeight - (scrollTop + innerHeight) < 100) {
      setFetching(true);
    }
  };

  return (
    <>
      <ColumnCountBtn
        columnCount={columnCount}
        setColumnCount={setColumnCount}
      />
      <ImagesGallery columnCount={columnCount} images={images} />;
    </>
  );
};

export default HomePage;
