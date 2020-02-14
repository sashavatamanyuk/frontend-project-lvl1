import game from '../game';
import getPositiveNaturalNumber from './common/random-number';

const rulesGame = 'What number is missing in the progression?';

const makeArithmeticProgressionData = () => {
  const startNumber = getPositiveNaturalNumber(0, 20);
  const commonDifference = getPositiveNaturalNumber(1, 10);
  const progressionArr = [startNumber];

  for (let i = 1; i < 10; i += 1) {
    const nextNumber = startNumber + commonDifference * i;
    progressionArr.push(nextNumber);
  }

  const hiddenNumberIndex = getPositiveNaturalNumber(0, progressionArr.length - 1);

  return [progressionArr, hiddenNumberIndex];
};

const makeQuestion = (arr, hidden) => {
  let question = '';

  for (let i = 0; i < arr.length; i += 1) {
    question += i === hidden ? '.. ' : `${arr[i]} `;
  }

  return question;
};

const makeDataGame = () => {
  const [progressionArr, hiddenNumberIndex] = makeArithmeticProgressionData();
  const question = makeQuestion(progressionArr, hiddenNumberIndex);
  const answer = `${progressionArr[hiddenNumberIndex]}`;

  return [question, answer];
};

export default () => game(rulesGame, makeDataGame);
