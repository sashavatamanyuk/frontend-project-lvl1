import readlineSync from 'readline-sync';

const greetingByName = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};

// eslint-disable-next-line import/prefer-default-export
export const game = (rulesGame, getQuestion, checkQuestion, getCorrectAnswer) => {
  console.log('Welcome to the Brain Games!');
  console.log(rulesGame);
  const userName = greetingByName();

  for (let correctAnswerCounter = 0; correctAnswerCounter < 3;) {
    const question = getQuestion();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    correctAnswerCounter = checkQuestion(answer, getCorrectAnswer(question), userName)
      ? correctAnswerCounter + 1 : 0;
  }

  console.log(`Congratulations, ${userName}!`);
};
