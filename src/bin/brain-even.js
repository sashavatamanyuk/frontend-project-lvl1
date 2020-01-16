import { game } from '..';

const rulesGame = 'Answer "yes" if the number is even, otherwise answer "no".';

// eslint-disable-next-line import/prefer-default-export
const getPositiveNaturalNumber = () => Math.floor(Math.random() * 101);

const isEven = (n) => n % 2 === 0;

const checkAnswer = (answer, correctAnswer, userName) => {
  // eslint-disable-next-line no-nested-ternary
  const ans = answer === 'yes' ? true : answer === 'no' ? false : answer;
  const correctAns = correctAnswer === true ? 'yes' : 'no';
  if (ans !== correctAnswer) {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAns}".\nLet's try again, ${userName}!`);
    return false;
  }

  console.log('Correct!');
  return true;
};

game(rulesGame, getPositiveNaturalNumber, checkAnswer, isEven);
