import readlineSync from 'readline-sync';

function namePlayer() {
	const name = readlineSync.question('May I have your name? ');
	console.log('Hello, ' + name +'!');

	return;
}

export {namePlayer};

random text for test make lint