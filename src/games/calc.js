import game from '../game';
import getRandomInteger from './common/random-integer';

const description = 'What is the result of the expression?';

const mathSymbols = ['+', '-', '*'];

const getRandomMathSymbol = (symbols) => symbols[getRandomInteger(0, symbols.length - 1)];

const makeQuestion = () => {
  const a = getRandomInteger();
  const b = getRandomInteger();
  const mathSymbol = getRandomMathSymbol(mathSymbols);

  return `${a} ${mathSymbol} ${b}`;
};

const getAnswer = (expression) => {
  let [a, , b] = expression.split(' ');
  const mathOperation = expression.split(' ')[1];

  a = parseInt(a, 10);
  b = parseInt(b, 10);

  let result = 0;
  switch (mathOperation) {
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
  const answer = getAnswer(question).toString();

  return [question, answer];
};

export default () => game(description, makeDataGame);
