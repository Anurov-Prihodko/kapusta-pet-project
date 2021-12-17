function nameFromEmail(email) {
  const words = email.split('@');
  if (words.length === 0) return '';
  if (words[0].length === 0) return '';
  const firstLetter = words[0][0].toUpperCase();
  const restOfTheName = words[0].slice(1);
  return firstLetter + restOfTheName;
}

export { nameFromEmail };
