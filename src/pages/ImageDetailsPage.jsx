import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiUnsplash } from 'services/apiUnsplash';
import { ImageDetails } from 'components/ImageDetails/ImageDetails';

const ImageDetailsPage = () => {
  const { slug } = useParams();
  const [imageDetails, setImageDetails] = useState(null);

  useEffect(() => {
    apiUnsplash.getImageDetails(slug).then(data => setImageDetails(data));
  }, [slug]);

  return <>{imageDetails && <ImageDetails imageDetails={imageDetails} />}</>;
};

export default ImageDetailsPage;
