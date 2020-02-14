import game from '../game';
import getPositiveNaturalNumber from './common/random-number';

const rulesGame = 'What is the result of the expression?';

const getRandomOperand = () => {
  const operands = ['+', '-', '*'];

  return operands[Math.floor(Math.random() * operands.length)];
};

const makeQuestion = () => {
  const a = getPositiveNaturalNumber();
  const b = getPositiveNaturalNumber();
  const operand = getRandomOperand();

  return `${a} ${operand} ${b}`;
};

const getAnswer = (expressionStr) => {
  // eslint-disable-next-line prefer-const
  let [a, operand, b] = expressionStr.split(' ');

  a = parseInt(a, 10);
  b = parseInt(b, 10);

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

const makeDataGame = () => {
  const question = makeQuestion();
  const answer = `${getAnswer(question)}`;

  return [question, answer];
};

export default () => game(rulesGame, makeDataGame);
