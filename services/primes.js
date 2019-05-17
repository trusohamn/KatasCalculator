function primeGenerator(num) {
  if (num === undefined || num === '') {
    throw new Error('invalidInput');
  } else if (isNaN(num)) {
    throw new Error('invalidInput');
  }

  let n = parseInt(num);
  if (n < 0) {
    throw new Error('invalidInput');
  }
  const arr = [];


  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      arr.push(i);
      n /= i;
      i--;
    }
  }
  if (n !== 1) {
    arr.push(n);
  }
  return arr;
}


module.exports.eval = primeGenerator;