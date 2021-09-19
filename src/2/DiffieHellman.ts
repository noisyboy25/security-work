import { generatePrimes } from './lib';

export default class DiffieHellman {
  g: bigint;
  p: bigint;
  seed: bigint = BigInt(
    generatePrimes(2 + Math.floor(Math.random() * 100000)).pop() as number
  );
  pub: bigint;
  secret: bigint | null = null;

  constructor(g: number | bigint, p: number | bigint) {
    this.g = BigInt(g);
    this.p = BigInt(p);
    this.pub = this.g ** this.seed % this.p;
  }

  generateSecret(pub: bigint): void {
    this.secret = pub ** this.seed % this.p;
  }
}
