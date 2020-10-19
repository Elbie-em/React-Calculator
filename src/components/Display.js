import React from 'react';
import PropType from 'prop-types';
import '../styles/styles.css';

const Display = ({ result }) => (
  <div className="display">
    <span className="res">{result}</span>
  </div>
);

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropType.string,
};

export default Display;
