import { generatePrime } from '../lib';

export default class DiffieHellman {
  g: bigint;
  p: bigint;
  seed: bigint = BigInt(generatePrime(2 + Math.floor(Math.random() * 100000)));
  pub: bigint;
  secret: bigint | null = null;

  constructor(g: number | bigint, p: number | bigint) {
    this.g = BigInt(g);
    this.p = BigInt(p);
    this.pub = this.g ** this.seed % this.p;
  }

  generateSecret(pub: bigint) {
    this.secret = pub ** this.seed % this.p;
  }
}
