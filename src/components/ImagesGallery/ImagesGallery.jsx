import { ImageItem } from 'components/ImageItem/ImageItem';
import { useEffect, useState } from 'react';
import { apiUnsplash } from 'services/apiUnsplash';

export const ImagesGallery = ({ columnCount }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    apiUnsplash.getAllImages().then(newImages => {
      setImages(newImages);
    });
  }, []);

  return (
    <ul style={{ columnCount: columnCount }}>
      {images.length > 0 &&
        images.map(image => <ImageItem key={image.id} imageData={image} />)}
    </ul>
  );
};
