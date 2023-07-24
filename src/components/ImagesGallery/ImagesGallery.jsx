import { splitArrayToSubArray } from 'utils/splitArrayToSubArrays';

import { ImageGalleryItem } from 'components';

import s from './ImageGallery.module.css';
import { useMediaQuery } from 'hooks/useMediaQuery';

export const ImagesGallery = ({ columnCount, images }) => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return (
    <div
      className={s.gallery}
      style={
        isDesktop
          ? {
              gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,
            }
          : null
      }
    >
      {splitArrayToSubArray(images, columnCount).map((splitImages, index) => (
        <ul key={index}>
          {splitImages.map(image => (
            <ImageGalleryItem key={image.id} imageData={image} />
          ))}
        </ul>
      ))}
    </div>
  );
};
