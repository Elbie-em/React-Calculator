// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import Button from './Button';

const buttonSyms = [
  ['AC', '+/-', '%', '÷'],
  ['7', '8', '9', 'X'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.', '='],
];

const ButtonPanel = () => (
    <div>
      {buttonSyms.map(group => (
        <div key={group}>
          {group.map(sym => <Button key={sym} name={sym}>{sym}</Button>)}
        </div>
      ))}
    </div>
);

export default ButtonPanel;
