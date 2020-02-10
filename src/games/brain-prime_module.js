import game from '../game';
import getPositiveNaturalNumber from './common/random-number_module';

const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.floor(num / 2); i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const makeQuestion = () => `${getPositiveNaturalNumber()}`;

const makeDataGame = () => {
  const question = makeQuestion();
  const answer = isPrime(+question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => game(rulesGame, makeDataGame);
