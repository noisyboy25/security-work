import DiffieHellmanClient from './DiffieHellman';

const main = () => {
  const g = 5;
  const p = 23;
  const alice = new DiffieHellmanClient(g, p);
  const bob = new DiffieHellmanClient(g, p);
  alice.generateSecret(bob.pub);
  bob.generateSecret(alice.pub);
  console.log({ alice, bob });
};

main();
