export class CaesarModified {
  alphabet: string;
  key: string;

  constructor(options: { alphabet: string; key: string }) {
    this.alphabet = options.alphabet;
    this.key = options.key;
  }

  encrypt(text: string): string {
    return text
      .split('')
      .map((ch, i) => {
        const charIndex = this.alphabet.split('').indexOf(ch);
        const shift = this.alphabet.indexOf(
          this.key.charAt(i % this.key.length)
        );
        return this.alphabet.charAt((charIndex + shift) % this.alphabet.length);
      })
      .join('');
  }

  decrypt(ciphertext: string): string {
    return ciphertext
      .split('')
      .map((ch, i) => {
        const charIndex = this.alphabet.split('').indexOf(ch);
        const shift = this.alphabet.indexOf(
          this.key.charAt(i % this.key.length)
        );
        return this.alphabet.charAt(
          (this.alphabet.length + charIndex - shift) % this.alphabet.length
        );
      })
      .join('');
  }
}
