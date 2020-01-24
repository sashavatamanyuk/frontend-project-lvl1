#!/usr/bin/env node
import { game } from '..';

const rulesGame = 'What is the result of the expression?';

const getRandomOperand = () => {
  const operands = ['+', '-', '*'];
  return operands[Math.floor(Math.random() * 3)];
};

const getPositiveNaturalNumber = () => Math.floor(Math.random() * 101);

const makeExpression = () => {
  const a = getPositiveNaturalNumber();
  const b = getPositiveNaturalNumber();
  const operand = getRandomOperand();
  return `${a} ${operand} ${b}`;
};

// eslint-disable-next-line consistent-return
const calculateExpression = (expressionStr) => {
  const expressionArr = expressionStr.split(' ');
  const a = parseInt(expressionArr[0], 10);
  const b = parseInt(expressionArr[2], 10);
  const operand = expressionArr[1];
  if (operand === '+') {
    return a + b;
  }
  if (operand === '-') {
    return a - b;
  }
  if (operand === '*') {
    return a * b;
  }
};

const checkAnswer = (answer, correctAnswer, userName) => {
  if (Number(answer) !== correctAnswer) {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
    return false;
  }

  console.log('Correct!');
  return true;
};

game(rulesGame, makeExpression, checkAnswer, calculateExpression);
