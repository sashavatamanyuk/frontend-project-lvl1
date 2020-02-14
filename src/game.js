import readlineSync from 'readline-sync';

export default (description, makeDataGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  let qtyCorrectAnswer = 0;
  const qtyRound = 3;
  for (let i = 0; i < qtyRound; i += 1) {
    const [question, answer] = makeDataGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${userName}!`);
      break;
    } else {
      console.log('Correct!');
      qtyCorrectAnswer += 1;
    }
  }

  if (qtyCorrectAnswer === qtyRound) console.log(`Congratulations, ${userName}!`);
};
