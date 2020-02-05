import game from '../game';
import { getPositiveNaturalNumber } from './common/random-number_module';

const gameType = 'prime';

const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }

  return num > 1;
};

const makeQuestion = () => `${getPositiveNaturalNumber()}`;

export default () => game(rulesGame, makeQuestion, gameType, isPrime);
