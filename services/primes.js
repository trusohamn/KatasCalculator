function primeGenerator(num) {
    if(num === undefined || num === '') {
      throw new Error('invalidInput');
    }

    const arr = [];
    let n = num;
  
  
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