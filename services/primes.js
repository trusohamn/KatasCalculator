function primeGenerator(num) {
    const arr = [];
    let n = num;
  
  
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        arr.push(i);
        n /= i;
        i = 2;
      }
    }
    if (n !== 1) {
      arr.push(n);
    }
    return arr;
  }
  
  
  module.exports.eval = primeGenerator;