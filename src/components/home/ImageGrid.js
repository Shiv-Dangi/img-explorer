import React, {PropTypes} from 'react';
import ImageView from './ImageView';

const ImageGrid = ({images}) => {
  return (
    <div>
      {images.map(image =>
          <ImageView key={image.id} image={image} />
        )}
    </div>
  );
};

ImageGrid.propTypes = {
  images: PropTypes.array.isRequired
};

export default ImageGrid;
