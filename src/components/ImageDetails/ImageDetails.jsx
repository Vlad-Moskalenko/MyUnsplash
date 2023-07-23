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
          <b>Author:</b> {user.first_name + ' ' + user.last_name}
        </p>
        <p>
          <b>Description:</b> {description || alt_description}
        </p>
        <p className={s.meta}>
          <span>
            <b>Downloads:</b> {downloads}
          </span>
          <span>
            <b>Likes:</b> {likes}
          </span>
          <span>
            <b>Views:</b> {views}
          </span>
        </p>
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
