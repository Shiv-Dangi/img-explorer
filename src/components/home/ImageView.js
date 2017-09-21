import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const ImageView = ({image}) => {
  return (
    <div key={image.id} className="col-md-4 image-div">
      <img src={image.Href} title={image.title} height="200px" width="200px" />
    </div>
  );
};

ImageView.propTypes = {
  image: PropTypes.object.isRequired
};

export default ImageView;
