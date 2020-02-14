import game from '../game';
import getRandomInteger from './common/random-integer';

const description = 'What number is missing in the progression?';

const makeArithmeticProgression = () => {
  const startNumber = getRandomInteger(0, 20);
  const commonDifference = getRandomInteger(1, 10);
  const progression = [];
  const progressionLength = 10;

  for (let i = 0; i < progressionLength; i += 1) {
    const nextNumber = startNumber + commonDifference * i;
    progression.push(nextNumber);
  }

  return progression;
};

const getProgressionHiddenNumber = (progression) => getRandomInteger(0, progression.length - 1);

const makeQuestion = (progression, hidden) => {
  let question = '';

  for (let i = 0; i < progression.length; i += 1) {
    question += i === hidden ? '.. ' : `${progression[i]} `;
  }

  return question;
};

const makeDataGame = () => {
  const progression = makeArithmeticProgression();
  const hiddenNumberIndex = getProgressionHiddenNumber(progression);
  const question = makeQuestion(progression, hiddenNumberIndex);
  const answer = progression[hiddenNumberIndex].toString();

  return [question, answer];
};

export default () => game(description, makeDataGame);
