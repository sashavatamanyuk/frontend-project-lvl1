import game from '../game';
import getRandomInteger from '../common/random-integer';

const description = 'What number is missing in the progression?';

const makeArithmeticProgression = (startNumber, commonDiff, progressionLength = 10) => {
  const progression = [];

  for (let i = 0; i < progressionLength; i += 1) {
    const nextNumber = startNumber + commonDiff * i;
    progression.push(nextNumber);
  }

  return progression;
};

const makeQuestion = (progression, hidden) => {
  let question = '';

  for (let i = 0; i < progression.length; i += 1) {
    question = i === hidden ? `${question}.. ` : `${question}${progression[i]} `;
  }

  return question.trim();
};

const makeDataGame = () => {
  const startProgression = getRandomInteger(0, 20);
  const differenceProgression = getRandomInteger(1, 10);
  const progression = makeArithmeticProgression(startProgression, differenceProgression);

  const hiddenNumberIndex = getRandomInteger(0, progression.length - 1);
  const question = makeQuestion(progression, hiddenNumberIndex);
  const answer = progression[hiddenNumberIndex].toString();

  return [question, answer];
};

export default () => game(description, makeDataGame);
