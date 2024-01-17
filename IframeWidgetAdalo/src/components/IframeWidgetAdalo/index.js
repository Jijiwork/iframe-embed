import React from 'react';

const IframeWidgetAdalo = ({ src, width, height }) => {
  return (
    <iframe
      src={src}
      width={width}
      height={height}
      style={{ maxWidth: '100%' }}
      frameBorder="0"
      title="Iframe Widget"
    ></iframe>
  );
};

export default IframeWidgetAdalo;
