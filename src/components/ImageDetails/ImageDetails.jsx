import { Link } from 'react-router-dom';

export const ImageDetails = ({ imageDetails }) => {
  const { description, alt_description, downloads, likes, tags, urls } =
    imageDetails;

  console.log(imageDetails);
  return (
    <main>
      <img src={urls?.regular} alt={alt_description} />
      <p> Description: {description || alt_description}</p>
      <p>Downloads: {downloads}</p>
      <p>Likes: {likes}</p>
      <ul>
        {tags.map(tag => (
          <li key={tag.title}>
            <Link to={`/${tag.title}`}>@{tag.title}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
};
