import game from '../game';
import getRandomInteger from './common/random-integer';

const description = 'Find the greatest common divisor of given numbers.';

const getGCD = (a, b) => {
  if (b === 0) {
    return a;
  }

  return getGCD(b, a % b);
};

const makeDataGame = () => {
  const a = getRandomInteger();
  const b = getRandomInteger();

  const question = `${a} ${b}`;
  const answer = getGCD(a, b).toString();

  return [question, answer];
};

export default () => game(description, makeDataGame);
