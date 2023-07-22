import { ColumnCountBtn } from 'components/ColumnCountBtn/ColumnCountBtn';
import { ImagesGallery } from 'components/ImagesGallery/ImagesGallery';
import { useState } from 'react';

const HomePage = () => {
  const [columnCount, setColumnCount] = useState(3);

  return (
    <>
      <ColumnCountBtn
        columnCount={columnCount}
        setColumnCount={setColumnCount}
      />
      <ImagesGallery columnCount={columnCount} />;
    </>
  );
};

export default HomePage;
