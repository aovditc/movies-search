import React from 'react';
import PropTypes from 'prop-types';

function Image({
  src,
  title
}: {
  src: string;
  title: string;
}): React.ReactElement {
  return <img src={src} alt={title} style={{ height: 100 }} />;
}

Image.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string
};

export default Image;
