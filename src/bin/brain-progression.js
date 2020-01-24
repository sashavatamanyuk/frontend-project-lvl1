#!/usr/bin/env node
import { game } from '..';

const rulesGame = 'What number is missing in the progression?';

const getPositiveNaturalNumber = (max) => Math.floor(Math.random() * max);

const makeArithmeticProgression = () => {
  const startNumber = getPositiveNaturalNumber(21);
  const commonDifference = getPositiveNaturalNumber(11) + 1;
  const progressionArr = [startNumber];

  for (let i = 1; i < 10; i += 1) {
    const nextNumber = progressionArr[progressionArr.length - 1] + commonDifference;
    progressionArr.push(nextNumber);
  }

  return progressionArr;
};

const makeQuestion = () => {
  const arithmeticProgression = makeArithmeticProgression();
  const indexOfHiddenNumber = getPositiveNaturalNumber(arithmeticProgression.length);
  return arithmeticProgression.reduce((acc, el, index) => {
    if (index === indexOfHiddenNumber) {
      // eslint-disable-next-line no-param-reassign
      acc += '.. ';
    } else {
      // eslint-disable-next-line no-param-reassign
      acc += `${el} `;
    }
    return acc;
  }, '');
};

const getHiddenNumber = (progressionStr) => {
  const arrProgression = progressionStr.trim().split(' ');
  const hiddenNumberIndex = arrProgression.indexOf('..');
  let a = 0;
  let b = 0;

  if (hiddenNumberIndex === 0
    || hiddenNumberIndex === 1
    || hiddenNumberIndex === arrProgression.length - 1
    || hiddenNumberIndex === arrProgression.length - 2) {
    // eslint-disable-next-line prefer-destructuring
    a = arrProgression[4];
    // eslint-disable-next-line prefer-destructuring
    b = arrProgression[5];
  } else {
    // eslint-disable-next-line prefer-destructuring
    a = arrProgression[0];
    // eslint-disable-next-line prefer-destructuring
    b = arrProgression[1];
  }

  const commonDifference = Math.abs(+a - +b);
  let hiddenNumber = 0;

  if (hiddenNumberIndex === 0) {
    hiddenNumber = +arrProgression[1] - commonDifference;
  } else if (hiddenNumberIndex === arrProgression.length - 1) {
    hiddenNumber = +arrProgression[arrProgression.length - 2] + commonDifference;
  } else {
    hiddenNumber = +arrProgression[hiddenNumberIndex - 1] + commonDifference;
  }

  return hiddenNumber;
};

const checkAnswer = (answer, correctAnswer, userName) => {
  if (Number(answer) !== correctAnswer) {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
    return false;
  }

  console.log('Correct!');
  return true;
};

game(rulesGame, makeQuestion, checkAnswer, getHiddenNumber);
