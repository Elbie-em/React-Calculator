import React from 'react';
import '../styles/styles.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

const App = () => (
  <div className="App">
    <Display />
    <ButtonPanel />
  </div>
);

export default App;
