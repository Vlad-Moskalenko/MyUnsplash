import { Link } from 'react-router-dom';

import s from './ImageDetails.module.css';

export const ImageDetails = ({ imageDetails }) => {
  const {
    description,
    alt_description,
    downloads,
    likes,
    tags,
    urls,
    views,
    user,
  } = imageDetails;

  return (
    <main className={s.main}>
      <div className={s.imageWrapper}>
        <img className={s.image} src={urls?.regular} alt={alt_description} />
      </div>
      <div className={s.imageMeta}>
        <p>
          <strong>Author:</strong> {user.first_name + ' ' + user.last_name}
        </p>
        <p>
          <strong>Description:</strong> {description || alt_description}
        </p>
        <ul className={s.meta}>
          <li>
            <b>Downloads:</b> {downloads}
          </li>
          <li>
            <b>Likes:</b> {likes}
          </li>
          <li>
            <b>Views:</b> {views}
          </li>
        </ul>
        <ul className={s.tagsList}>
          {tags.map(tag => (
            <li className={s.tagItem} key={tag.title}>
              <Link to={`/${tag.title}`}>@{tag.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};
