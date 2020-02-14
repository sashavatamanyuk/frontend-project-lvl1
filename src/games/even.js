import game from '../game';
import getPositiveNaturalNumber from './common/random-number';

const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => n % 2 === 0;

const makeDataGame = () => {
  const question = getPositiveNaturalNumber();
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

export default () => game(rulesGame, makeDataGame);
