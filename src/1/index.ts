import { CaesarKeyword } from './caesar-keyword';
import { FrequencyAnalyser as FrequencyAnalyser } from './frequency';
import fs from 'fs';
import chalk from 'chalk';

const test = () => {
  const cipher = new CaesarKeyword({
    keyword: 'SeCrEt',
    key: 17,
  });

  console.log(`"${cipher.alphabet}"`);

  const encoded = cipher.encrypt('Hello World');
  const decoded = cipher.decrypt(encoded);

  console.log({ encoded, decoded });
};

const freqTest = () => {
  const data = fs.readFileSync('src/1/raw.txt', { encoding: 'utf8' });

  const cipher = new CaesarKeyword({
    alphabet: 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя',
    keyword: 'секрет',
    key: 17,
  });

  const encoded = cipher.encrypt(data);

  const analyser = new FrequencyAnalyser();
  const freqEnc = analyser.buildFreqString(encoded);

  const freqDecoded = analyser.decode(encoded, freqEnc);

  showMistakes(data, freqDecoded);
};

const showMistakes = (a: string, b: string) => {
  const out = b
    .split('')
    .map((ch, i) => {
      if (ch === a.charAt(i)) return ch;
      else return chalk.red(ch);
    })
    .join('');
  console.log(out);
};

test();
freqTest();
