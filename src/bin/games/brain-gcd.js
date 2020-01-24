#!/usr/bin/env node
import { game } from '../..';

const rulesGame = 'Find the greatest common divisor of given numbers.';

const getPositiveNaturalNumber = () => Math.floor(Math.random() * 101);

const makeQuestion = () => {
  const a = getPositiveNaturalNumber();
  const b = getPositiveNaturalNumber();
  return `${a} ${b}`;
};

const getEuclidGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getEuclidGCD(b, a % b);
};

const getGCD = (numbersStr) => {
  const numbersArr = numbersStr.split(' ');
  const a = parseInt(numbersArr[0], 10);
  const b = parseInt(numbersArr[1], 10);

  return getEuclidGCD(a, b);
};

const checkAnswer = (answer, correctAnswer, userName) => {
  if (Number(answer) !== correctAnswer) {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
    return false;
  }

  console.log('Correct!');
  return true;
};

game(rulesGame, makeQuestion, checkAnswer, getGCD);
