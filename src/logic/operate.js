import Big from 'big.js';

const operate = (numberOne,numberTwo,operation) => {
  let data;

  switch (operation) {
    case '÷':
      data = numberTwo === '0' ? 0 : Big(numberOne).div(numberTwo).toString();
      break;
    case 'X':
      data = Big(numberOne).times(numberTwo).toString();
      break;
    case '+':
      data = Big(numberOne).plus(numberTwo).toString();
      break;
    case '-':
      data = Big(numberOne).minus(numberTwo).toString();
      break;
    case '%':
      data = Big(numberOne).div('100').times(numberTwo).toString();
      break;
    default:
      break;
  }

  return data;

}

export default operate;