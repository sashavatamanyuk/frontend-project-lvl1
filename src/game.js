import readlineSync from 'readline-sync';

export default (rulesGame, makeDataGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(rulesGame);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  let correctAnswerCounter = 0;
  do {
    const [question, answer] = makeDataGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".\nLet's try again, ${userName}!`);
      correctAnswerCounter = 0;
    } else {
      console.log('Correct!');
      correctAnswerCounter += 1;
    }
  } while (correctAnswerCounter < 3);

  console.log(`Congratulations, ${userName}!`);
};
