import game from '../game';
import getRandomInteger from '../common/random-integer';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => n % 2 === 0;

const makeDataGame = () => {
  const question = getRandomInteger();
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => game(description, makeDataGame);
