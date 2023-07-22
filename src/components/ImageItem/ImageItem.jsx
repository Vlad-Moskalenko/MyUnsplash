import { Link } from 'react-router-dom';
import s from './ImageItem.module.css';

export const ImageItem = ({ imageData }) => {
  const { id, alt_description, description, likes, urls } = imageData;

  return (
    <li className={s.card}>
      <Link to={`image/${id}`}>
        <img loading="lazy" src={urls.small} alt={alt_description} />
      </Link>
    </li>
  );
};
