#!/usr/bin/env node

import readlineSync from 'readline-sync';
import namePlayer from '../src/cli.js';

function brainIven(player) {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const num1 = Math.floor(Math.random() * 99) + 1;
    const num2 = Math.floor(Math.random() * 99) + 1;
    const array = ['+', '-', '*'];
    const rand = Math.floor(Math.random() * array.length);
    const operator = array[rand];
    console.log(`Question: ${num1} ${operator} ${num2}`);
    let rightanswer = 1;
    if (operator === '+') {
      rightanswer = num1 + num2;
    }
    if (operator === '-') {
      rightanswer = num1 - num2;
    }
    if (operator === '*') {
      rightanswer = num1 * num2;
    }
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

console.log('Welcome to the Brain Games!');

const name = namePlayer();

brainIven(name);
