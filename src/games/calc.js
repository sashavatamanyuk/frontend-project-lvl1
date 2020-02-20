import game from '../game';
import getRandomInteger from '../common/random-integer';

const description = 'What is the result of the expression?';

const mathSigns = ['+', '-', '*'];

const getRandomMathSign = (signs) => signs[getRandomInteger(0, signs.length - 1)];

const getAnswer = (a, b, sign) => {
  let result = 0;
  switch (sign) {
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
  const a = getRandomInteger();
  const b = getRandomInteger();
  const mathSign = getRandomMathSign(mathSigns);

  const question = `${a} ${mathSign} ${b}`;
  const answer = getAnswer(a, b, mathSign).toString();

  return [question, answer];
};

export default () => game(description, makeDataGame);
