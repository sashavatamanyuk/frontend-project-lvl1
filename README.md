# nodejs-package
[![Maintainability](https://api.codeclimate.com/v1/badges/79406b35c88d69cc1cf5/maintainability)](https://codeclimate.com/github/sashavatamanyuk/brain-games/maintainability)
[![Build Status](https://travis-ci.com/sashavatamanyuk/brain-games.svg?branch=master)](https://travis-ci.com/sashavatamanyuk/brain-games)

# js-simple-cli-brain-games

## Install

```sh
$ make install
$ make build
$ sudo make link
```

## Using

```sh
$ brain-calc
$ brain-even
$ brain-gcd
$ brain-prime
$ brain-progression
```

e.g.:
To win the game you have get **3 correct answers.**
```
$ brain-calc
---------- Result ------------
Welcome to the Brain Games!
What is the result of the expression?
May I have your name? Sasha 
Hello, Sasha!
Question: 59 * 86
Your answer: 432
"432" is wrong answer ;(. Correct answer was "5074".
Let's try again, Sasha!
Question: 87 * 9
Your answer: 783          
Correct!
Question: 21 * 93
Your answer: 1953
Correct!
Question: 13 + 66
Your answer: 79 
Correct!
Congratulations, Sasha!
------------------------------
```

```
$ brain-even
---------- Result ------------
Welcome to the Brain Games!
Answer "yes" if the number is even, otherwise answer "no".
May I have your name? Sasha 
Hello, Sasha!
Question: 32
Your answer: yes 
Correct!
------------------------------
```

```
$ brain-gcd
---------- Result ------------
Welcome to the Brain Games!
Find the greatest common divisor of given numbers.
May I have your name? Sasha 
Hello, Sasha!
Question: 24 12
Your answer: 12 
Correct!
------------------------------
```

```
$ brain-prime
---------- Result ------------
Welcome to the Brain Games!
Answer "yes" if given number is prime. Otherwise answer "no".
May I have your name? Sasha 
Hello, Sasha!
Question: 18
Your answer: no 
Correct!
------------------------------
```

```
$ brain-progression
---------- Result ------------
Welcome to the Brain Games!
What number is missing in the progression?
May I have your name? Sasha 
Hello, Sasha!
Question: 3 10 17 24 31 38 45 52 59 .. 
Your answer: 66
Correct!
------------------------------
```
