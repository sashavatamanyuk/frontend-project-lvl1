import readlineSync from 'readline-sync';

const greetingByName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  return userName;
};

// brain-calc, brain-gcd, brain-progression
const checkAnswer = (answer, correctAnswer, userName) => {
  if (Number(answer) !== correctAnswer) {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
    return false;
  }

  console.log('Correct!');

  return true;
};

// brain-even, brain-prime
const checkAnswerBoolean = (answer, correctAnswer, userName) => {
  let ans = answer;
  if (ans === 'yes') {
    ans = true;
  } else if (ans === 'no') {
    ans = false;
  }

  const correctAns = correctAnswer === true ? 'yes' : 'no';
  if (ans !== correctAnswer) {
    console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAns}".\nLet's try again, ${userName}!`);
    return false;
  }

  console.log('Correct!');

  return true;
};

const booleanGameCheckAnswer = ['even', 'prime'];

const getCheckAnswer = (gameType) => {
  if (booleanGameCheckAnswer.includes(gameType)) {
    return checkAnswerBoolean;
  }

  return checkAnswer;
};


export default (rulesGame, getQuestion, gameType, getCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(rulesGame);
  const userName = greetingByName();
  const checkQuestion = getCheckAnswer(gameType);

  let correctAnswerCounter = 0;
  do {
    const question = getQuestion();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    correctAnswerCounter = checkQuestion(answer, getCorrectAnswer(question), userName)
      ? correctAnswerCounter + 1 : 0;
  } while (correctAnswerCounter < 3);

  console.log(`Congratulations, ${userName}!`);
};
