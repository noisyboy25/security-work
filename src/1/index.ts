import { CaesarModified } from './caesar-modified';
import { FrequencyAnalyser as FrequencyAnalyser } from './frequency';
import fs from 'fs';

const DEFAULT_ALPHABET =
  'абвгдеёжзийклмнопрстуфхцчшщъыьэюяabcdefghijklmnopqrstuvwxyz' +
  'абвгдеёжзийклмнопрстуфхцчшщъыьэюяabcdefghijklmnopqrstuvwxyz'.toUpperCase() +
  ` 1234567890+=-_,.?/\\|;:~!@#$%^&*()[]{}<>"'`;

const test = () => {
  const cipher = new CaesarModified({
    alphabet: DEFAULT_ALPHABET,
    key: 'SeCrEt',
  });

  console.log(`"${cipher.alphabet}"`);

  const encoded = cipher.encrypt('Hello World');
  const decoded = cipher.decrypt(encoded);

  console.log({ encoded, decoded });
};

const freqTest = () => {
  const data = fs.readFileSync('src/1/raw.txt', { encoding: 'utf8' });

  const analyser = new FrequencyAnalyser();
  const freq = analyser.buildFreqString(data);

  console.log({ freq });

  const decoded = analyser.decode(data, freq);

  console.log(decoded);
  fs.writeFileSync('src/1/res.txt', decoded);
};

test();
freqTest();
