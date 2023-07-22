import { useEffect, useState } from 'react';
import { apiUnsplash } from 'services/apiUnsplash';

const HomePage = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    apiUnsplash.getAllImages().then(data => setImages(data));
  }, []);

  return <div>HomePage</div>;
};

export default HomePage;
