import React from 'react';
import Button from './Button';
import '../styles/styles.css';

const buttonSyms = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'X'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const operatorSyms = {
  divide: '÷',
  multiply: 'X',
  substract: '-',
  add: '+',
};

const checkIfOperator = (sym, obj) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const key in obj) {
    if (sym === obj[key]) {
      return true;
    }
  }
  return false;
};

const ButtonPanel = ({clickHandler}) => (
  <div>
    {buttonSyms.map(group => (
      <div className="btn-group" key={group}>
        {group.map(sym => {
          if (checkIfOperator(sym, operatorSyms)) {
            return <Button key={sym} name={sym} wide={false} handleClick={clickHandler}/>;
          }
          if (sym === '0') {
            return <Button key={sym} name={sym} color="grey" wide handleClick={clickHandler}/>;
          }
          return <Button key={sym} name={sym} color="grey" wide={false} handleClick={clickHandler}/>;
        })}
      </div>
    ))}
  </div>
);

ButtonPanel.propTypes = {
  clickHandler: PropType.func,
};

ButtonPanel.defaultProps = {
  clickHandler: null,
};

export default ButtonPanel;
