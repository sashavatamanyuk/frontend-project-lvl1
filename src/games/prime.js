import game from '../game';
import getRandomInteger from '../common/random-integer';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;

  for (let i = 2; i <= Math.floor(num / 2); i += 1) {
    if (num % i === 0) return false;
  }

  return true;
};

const makeDataGame = () => {
  const question = getRandomInteger();
  const answer = isPrime(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => game(description, makeDataGame);
