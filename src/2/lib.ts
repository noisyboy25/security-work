export const generatePrimes = (n: number) => {
  const checkPrimes = new Array(n + 1).fill(0);

  for (let p = 2; p * p < n; p++) {
    if (checkPrimes[p]) continue;

    for (let q = p * p; q <= n; q++) {
      if (q % p === 0) checkPrimes[q]++;
    }
  }

  return checkPrimes
    .slice(2)
    .map((v, i) => !v && i + 1)
    .filter((v) => v);
};
