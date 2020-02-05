import game from '../game';
import { getPositiveNaturalNumber } from './common/random-number_module';

const gameType = 'gcd';

const rulesGame = 'Find the greatest common divisor of given numbers.';

const makeQuestion = () => {
  const a = getPositiveNaturalNumber();
  const b = getPositiveNaturalNumber();

  return `${a} ${b}`;
};

const getEuclidGCD = (a, b) => {
  if (b === 0) {
    return a;
  }

  return getEuclidGCD(b, a % b);
};

const getGCD = (numbersStr) => {
  const numbersArr = numbersStr.split(' ');
  const a = parseInt(numbersArr[0], 10);
  const b = parseInt(numbersArr[1], 10);

  return getEuclidGCD(a, b);
};

export default () => game(rulesGame, makeQuestion, gameType, getGCD);
