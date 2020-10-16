// eslint-disable-next-line no-unused-vars
import React from 'react';
import '../styles/styles.css';
// eslint-disable-next-line no-unused-vars
import Display from './Display';
// eslint-disable-next-line no-unused-vars
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line
import calculate from '../logic/calculate';

const App = () => {
  return (
    <div className="App">
      <Display />
      <ButtonPanel />
    </div>
)};

export default App;
