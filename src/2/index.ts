import DiffieHellman from './diffie-hellman';

const main = () => {
  const g = 5;
  const p = 23;
  const alice = new DiffieHellman(g, p);
  const bob = new DiffieHellman(g, p);
  alice.generateSecret(bob.pub);
  bob.generateSecret(alice.pub);
  console.log({ alice, bob });
};

main();
