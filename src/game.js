import readlineSync from 'readline-sync';

export default (description, makeDataGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(description);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const roundCount = 3;
  for (let i = 0; i < roundCount; i += 1) {
    const [question, answer] = makeDataGame();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === answer) {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};
