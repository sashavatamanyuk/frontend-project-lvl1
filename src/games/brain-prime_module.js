export const gameType = 'prime';

export const rulesGame = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) return false;
  }

  return num > 1;
};

const getPositiveNaturalNumber = (max) => Math.floor(Math.random() * max);

export const makeQuestion = () => `${getPositiveNaturalNumber(101)}`;
