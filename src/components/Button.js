import React from 'react';
import PropType from 'prop-types';
import '../styles/styles.css';

const Button = ({
  name, color, wide, handleClick,
}) => (
  <button
    type="button"
    className={`btn btn-${color} ${wide ? 'btn-wide' : ''}`}
    color={color}
    onClick={() => handleClick(name)}
  >
    {name}
  </button>
);

Button.propTypes = {
  name: PropType.string.isRequired,
  wide: PropType.bool,
  color: PropType.string,
  handleClick: PropType.func,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
  handleClick: null,
};


export default Button;
