import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { apiUnsplash } from 'services/apiUnsplash';
import { ImageDetails } from 'components';

const ImageDetailsPage = () => {
  const { slug } = useParams();
  const [imageDetails, setImageDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    apiUnsplash
      .getImageDetails(slug)
      .then(data => {
        setImageDetails(data);
        setError(null);
      })
      .catch(error => setError(error.response.data));
  }, [slug]);

  return (
    <>
      {imageDetails && <ImageDetails imageDetails={imageDetails} />}
      {error && (
        <p className="error">{error || 'Oops, something went wrong'}</p>
      )}
    </>
  );
};

export default ImageDetailsPage;
