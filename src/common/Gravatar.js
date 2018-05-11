import React from 'react';
import PropTypes from 'prop-types';
import Gravatar from 'react-gravatar';

const RenderGravatar = ({ className, gravatarEmail, size }) => {
  return <Gravatar email={gravatarEmail} className={className} size={size} />;
};

RenderGravatar.propTypes = {
  className: PropTypes.string,
  gravatarEmail: PropTypes.string,
  size: PropTypes.number,
};

export default RenderGravatar;
