// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/styles.css';

const Button = ({ name ,color, wide}) => (
  <button type="button" 
  className={`btn btn-${color} ${wide ? 'btn-wide':''}`} color={color}>
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  wide: PropTypes.bool.isRequired,
  color: PropTypes.string,
};

Button.defaultProps = {
  color: 'orange',
};


export default Button;
