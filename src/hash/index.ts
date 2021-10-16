import { myHash } from './my-hash';

const debug = false;

const argInput = process.argv[2];

if (argInput) {
  console.log(argInput);
  console.log(myHash(argInput), '\n');
} else {
  console.log(myHash('!', debug), '\n');

  console.log(myHash('0', debug), '\n');

  console.log(myHash('1', debug), '\n');

  const text = 'Hello World!';

  console.log(myHash(text, debug), '\n');

  console.log(myHash(text.split('').reverse().join(''), debug), '\n');
}
