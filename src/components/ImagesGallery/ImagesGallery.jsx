import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { splitArrayToSubArray } from 'utils/splitArrayToSubArrays';

import s from './ImageGallery.module.css';

export const ImagesGallery = ({ columnCount, images }) => {
  return (
    <div
      className={s.gallery}
      style={{ gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))` }}
    >
      {images.length > 0 &&
        splitArrayToSubArray(images, columnCount).map((splitImages, index) => (
          <ul key={index}>
            {splitImages.map(image => (
              <ImageGalleryItem key={image.id} imageData={image} />
            ))}
          </ul>
        ))}
    </div>
  );
};
