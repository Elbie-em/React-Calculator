// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import '../styles/styles.css';

const Display = ({ result }) => (
    <div className="display">
      {result}
    </div>
);

Display.defaultProps = {
  result: '0',
};

Display.propTypes = {
  result: PropTypes.string.isRequired,
};

export default Display;