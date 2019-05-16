function eval(romanNum) {
  romanNum = romanNum.toUpperCase();
  const code = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  let count = 0;

  for (let i = 0; i < romanNum.length; i++) {
    const currentNum = code[romanNum.charAt(i)];

    if (code[romanNum.charAt(i + 1)] > currentNum) {
      count -= currentNum;
    } else {
      count += currentNum;
    }
  }

  return count;
}



module.exports.eval = eval;