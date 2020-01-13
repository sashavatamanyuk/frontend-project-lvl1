import readlineSync from 'readline-sync';
import { greetingByName } from '..';

const getPositiveNaturalNumber = () => Math.floor(Math.random() * 101);

const isEven = (n) => n % 2 === 0;

const checkAnswer = (answer, correctAnswer, userName) => {
  const ans = answer === 'yes' ? true : answer === 'no' ? false : answer;
  const correctAns = correctAnswer === true ? 'yes' : 'no';
  if (ans !== correctAnswer) {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAns}".\nLet's try again, ${userName}!`);
    return false;
  }

  console.log('Correct!');
  return true;
};

const game = () => {
  console.log('Welcome to the Brain Games!\nAnswer "yes" if the number is even, otherwise answer "no".');
  const userName = greetingByName();

  for (let correctAnswerCounter = 0; correctAnswerCounter < 3;) {
    const questionNumber = getPositiveNaturalNumber();
    console.log(`Question: ${questionNumber}`);
    const answer = readlineSync.question('Your answer: ');
    correctAnswerCounter = checkAnswer(answer, isEven(questionNumber), userName)
      ? correctAnswerCounter + 1 : 0;
  }

  console.log(`Congratulations, ${userName}!`);
};

game();
