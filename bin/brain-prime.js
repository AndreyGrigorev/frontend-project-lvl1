#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getNamePlayer from '../src/cli.js';

function primeNumber(number) {
  if (number < 4) return 'yes';
  let acc = 0;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) acc += 1;
  }
  const result = acc === 0 ? 'yes' : 'no';
  return result;
}

function brainPrime(player) {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const num = Math.floor(Math.random() * 99) + 2;
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    const rightanswer = primeNumber(num);
    if (answer === rightanswer) {
      console.log('Correct!');
    } else {
      console.log(`Let's try again, ${player}!`);

      return;
    }
  }

  console.log(`Congratulations, ${player}!`);
}

brainPrime(getNamePlayer());
