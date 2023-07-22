import { Link } from 'react-router-dom';

export const ImageItem = ({ imageData }) => {
  console.log(imageData);

  const { id, alt_description, description, likes, urls } = imageData;
  return (
    <li>
      <Link to={`image/${id}`}>
        <img loading="lazy" src={urls.regular} alt={alt_description} />
      </Link>
    </li>
  );
};
