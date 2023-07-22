import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import s from './ImageGallery.module.css';

export const ImagesGallery = ({ columnCount, images }) => {
  return (
    <ul className={s.gallery} style={{ columnCount: columnCount }}>
      {images.length > 0 &&
        images.map(image => (
          <ImageGalleryItem key={image.id} imageData={image} />
        ))}
    </ul>
  );
};
