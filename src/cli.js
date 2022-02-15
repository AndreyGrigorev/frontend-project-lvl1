import readlineSync from 'readline-sync';

function namePlayer() {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
}

// eslint-disable-next-line import/prefer-default-export
export { namePlayer };
