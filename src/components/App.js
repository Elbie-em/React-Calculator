import React from 'react';
import '../styles/styles.css';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

class App extends React.Component {

  constructor (props){
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(btnName){
    this.setState(data => calculate(data, btnName));
  }

  render () {
     return (
      <div className="App">
        <Display />
        <ButtonPanel />
      </div>
     );
  }
}

export default App;
