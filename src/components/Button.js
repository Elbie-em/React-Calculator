import React from 'react';
import PropType from 'prop-types';
import '../styles/styles.css';

const Button = ({ name, color, wide }) => (
  <button
    type="button"
    className={`btn btn-${color} ${wide ? 'btn-wide' : ''}`}
    color={color}
  >
    {name}
  </button>
);

Button.propTypes = {
  name: PropType.string.isRequired,
  wide: PropType.bool.isRequired,
  color: PropType.string,
};

Button.defaultProps = {
  color: 'orange',
};


export default Button;
