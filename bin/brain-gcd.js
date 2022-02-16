#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getNamePlayer from '../src/cli.js';

function gcd(a, b) {
  let gcdResult = 1;
  if (a % b === 0 || b % a === 0) {
    gcdResult = a <= b ? a : b;

    return gcdResult;
  }
  const min = a <= b ? a : b;
  for (let i = 1; i < min; i += 1) {
    if (a % i === 0 && b % i === 0) gcdResult = i;
  }

  return gcdResult;
}

function brainGcd(player) {
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const num1 = Math.floor(Math.random() * 99) + 1;
    const num2 = Math.floor(Math.random() * 99) + 1;
    console.log(`Question: ${num1} ${num2}`);
    const rightanswer = gcd(num1, num2);
    let answer = readlineSync.question('Your answer: ');
    answer = Number(answer);
    if (answer === rightanswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${rightanswer}'.`);
      console.log(`Let's try again, ${player}!`);

      return;
    }
  }

  console.log(`Congratulations, ${player}!`);
}

brainGcd(getNamePlayer());
