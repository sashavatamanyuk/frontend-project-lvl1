#!/usr/bin/env node
import { game } from '../..';

const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }

  return num > 1;
};

const getPositiveNaturalNumber = (max) => Math.floor(Math.random() * max);

const makeQuestion = () => `${getPositiveNaturalNumber(101)}`;

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

game(rulesGame, makeQuestion, checkAnswer, isPrime);
