export const gameType = 'calc';

export const rulesGame = 'What is the result of the expression?';

const getRandomOperand = () => {
  const operands = ['+', '-', '*'];

  return operands[Math.floor(Math.random() * 3)];
};

const getPositiveNaturalNumber = () => Math.floor(Math.random() * 101);

export const makeExpression = () => {
  const a = getPositiveNaturalNumber();
  const b = getPositiveNaturalNumber();
  const operand = getRandomOperand();

  return `${a} ${operand} ${b}`;
};

export const calculateExpression = (expressionStr) => {
  const expressionArr = expressionStr.split(' ');

  const a = parseInt(expressionArr[0], 10);
  const b = parseInt(expressionArr[2], 10);
  const operand = expressionArr[1];

  let result = 0;
  if (operand === '+') {
    result = a + b;
  }
  if (operand === '-') {
    result = a - b;
  }
  if (operand === '*') {
    result = a * b;
  }

  return result;
};
