import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { useEffect, useState } from 'react';
import { apiUnsplash } from 'services/apiUnsplash';

import s from './ImageGallery.module.css';

export const ImagesGallery = ({ columnCount }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    apiUnsplash.getAllImages().then(newImages => {
      setImages(newImages);
    });
  }, []);

  return (
    <ul className={s.gallery} style={{ columnCount: columnCount }}>
      {images.length > 0 &&
        images.map(image => (
          <ImageGalleryItem key={image.id} imageData={image} />
        ))}
    </ul>
  );
};
