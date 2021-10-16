export const myHash = (input: string, debug = false) => {
  let output: string = '';

  console.log(input);

  const charCodes = input.split('').map((char) => char.charCodeAt(0));

  const charCodeSum = charCodes.reduce((sum, charCode) => sum + charCode);

  if (debug) console.log({ charCodes, charCodeSum });

  const addedHexCodes = charCodes.map(
    (charCode) => charCode.toString(16) + charCode
  );

  if (debug) console.log({ addedHexCodes });

  const secondCharCodes = addedHexCodes.map((code) =>
    code
      .split('')
      .map((char) => char.charCodeAt(0))
      .join('')
  );

  if (debug) console.log({ secondCharCodes });

  const numbers = secondCharCodes.map(
    (code) => (Number(code) % charCodeSum) * charCodeSum
  );

  if (debug) console.log({ numbers });

  output = numbers.map((number) => number.toString(16)).join('');
  return output;
};
