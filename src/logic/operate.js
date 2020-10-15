import Big from 'big.js';

export default (numberOne, numberTwo, operation) => {
  let total;
  const x = new Big(numberOne);
  const y = new Big(numberTwo);
  switch (operation) {
    case '-':
      return x.minus(y).toString();
    case '+':
      return x.plus(y).toString();
    case 'x':
      return x.mul(y).toString();
    case '÷':
      if (numberTwo === '0') {
        total = 'Infinity';
      } else {
        total = x.div(numberTwo).toString();
      }
      return total;
    default:
      break;
  }

};

