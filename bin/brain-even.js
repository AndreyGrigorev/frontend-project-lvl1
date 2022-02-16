#!/usr/bin/env node

import readlineSync from 'readline-sync';
import namePlayer from '../src/cli.js';

function brainIven(player) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const num = Math.floor(Math.random() * (100 - 1)) + 1;
    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    const rightanswer = num % 2 === 0 ? 'yes' : 'no';
    if (answer === rightanswer) {
      console.log('Correct!');
    } else {
      console.log(`Let's try again, ${player}!`);
      return;
    }
  }

  console.log(`Congratulations, ${player}!`);
}

console.log('Welcome to the Brain Games!');

const name = namePlayer();

brainIven(name);
