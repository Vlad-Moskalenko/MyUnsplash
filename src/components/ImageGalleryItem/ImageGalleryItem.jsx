import { Link } from 'react-router-dom';
import s from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ imageData }) => {
  const { id, alt_description, urls } = imageData;

  return (
    <li className={s.galleryItem}>
      <Link to={`photos/${id}`}>
        <img id={id} loading="lazy" src={urls.small} alt={alt_description} />
      </Link>
    </li>
  );
};
