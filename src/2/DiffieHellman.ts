import { generatePrimes } from './lib';

export default class DiffieHellman {
  g: number;
  p: number;
  seed: number = generatePrimes(
    2 + Math.floor(Math.random() * 10)
  ).pop() as number;
  pub: number;
  secret: number | null = null;

  constructor(g: number, p: number) {
    this.g = g;
    this.p = p;
    this.pub = Math.pow(this.g, this.seed) % this.p;
  }

  generateSecret(pub: number): void {
    this.secret = Math.pow(pub, this.seed) % this.p;
  }
}
