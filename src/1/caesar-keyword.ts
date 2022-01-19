import chalk from 'chalk';

export class CaesarKeyword {
  alphabet: string =
    'абвгдеёжзийклмнопрстуфхцчшщъыьэюяabcdefghijklmnopqrstuvwxyz' +
    'абвгдеёжзийклмнопрстуфхцчшщъыьэюяabcdefghijklmnopqrstuvwxyz'.toUpperCase() +
    ` 1234567890+=-_,.?/\\|;:~!@#$%^&*()[]{}<>"'`;
  key: number = 0;
  keyword: string;

  constructor(options: { alphabet?: string; keyword: string; key?: number }) {
    this.alphabet = options.alphabet || this.alphabet;
    this.keyword = options.keyword;
    this.key = options.key || this.key;
  }

  encrypt(text: string): string {
    return text
      .split('')
      .map((ch, i) => {
        const charIndex = this.alphabet.indexOf(ch);
        if (charIndex < 0) return ch;
        const keyChar = this.keyword.charAt(i % this.keyword.length);
        const keyCharIndex = this.alphabet.indexOf(keyChar);
        const offset = (this.key + keyCharIndex) % this.alphabet.length;

        return this.alphabet.charAt(
          (this.alphabet.length + charIndex + offset) % this.alphabet.length
        );
      })
      .join('');
  }

  decrypt(ciphertext: string): string {
    return ciphertext
      .split('')
      .map((ch, i) => {
        const charIndex = this.alphabet.indexOf(ch);
        if (charIndex < 0) return ch;
        const keyChar = this.keyword.charAt(i % this.keyword.length);
        const keyCharIndex = this.alphabet.indexOf(keyChar);
        const offset = (this.key + keyCharIndex) % this.alphabet.length;

        return this.alphabet.charAt(
          (this.alphabet.length + charIndex - offset) % this.alphabet.length
        );
      })
      .join('');
  }
}
