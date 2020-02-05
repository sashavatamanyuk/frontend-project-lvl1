import game from '../game';
import { getPositiveNaturalNumber } from './common/random-number_module';

const gameType = 'calc';

const rulesGame = 'What is the result of the expression?';

const getRandomOperand = () => {
  const operands = ['+', '-', '*'];

  return operands[Math.floor(Math.random() * 3)];
};

const makeExpression = () => {
  const a = getPositiveNaturalNumber();
  const b = getPositiveNaturalNumber();
  const operand = getRandomOperand();

  return `${a} ${operand} ${b}`;
};

const calculateExpression = (expressionStr) => {
  const expressionArr = expressionStr.split(' ');

  const a = parseInt(expressionArr[0], 10);
  const b = parseInt(expressionArr[2], 10);
  const operand = expressionArr[1];

  let result = 0;
  switch (operand) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    default:
  }

  return result;
};

export default () => game(rulesGame, makeExpression, gameType, calculateExpression);
