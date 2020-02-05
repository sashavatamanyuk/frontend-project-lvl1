import game from '../game';
import getPositiveNaturalNumber from './common/random-number_module';

const gameType = 'even';

const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (n) => n % 2 === 0;

export default () => game(rulesGame, getPositiveNaturalNumber, gameType, isEven);
