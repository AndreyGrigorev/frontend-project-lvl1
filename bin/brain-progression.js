#!/usr/bin/env node

import readlineSync from 'readline-sync';
import getNamePlayer from '../src/cli.js';

function brainProgression(player) {
  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    let start = Math.floor(Math.random() * 99) + 1;
    const step = Math.floor(Math.random() * 99) + 1;
    const length = Math.floor(Math.random() * 5) + 5;
    const pass = Math.floor(Math.random() * (length - 1)) + 1;
    const rightanswer = start + (pass - 1) * step;
    const array = [];
    for (let j = 0; j < length; j += 1) {
      if (pass - 1 === j) {
        array.push('..');
        start += step;
      } else {
        array.push(start);
        start += step;
      }
    }
    const str = array.join(' ');
    console.log(`Question: ${str}`);
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

brainProgression(getNamePlayer());
