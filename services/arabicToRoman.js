function digitConverter(dig, digitIndex) { 
  let f, m, l; // first, middle, last symbol in use
  [f, m, l] = 'IVXLCDM'.split('').splice(digitIndex * 2 + 0, digitIndex * 2 + 3);

  let output = '';
  if (dig <= 3) {
    for (let i = 0; i < dig; i++) {
      output += f;
    }
  } else if (dig === 4) {
    output = f + m;
  } else if (dig === 5) {
    output = m;
  } else if (dig <= 8) {
    output = m;
    for (let i = 6; i <= dig; i++) {
      output += f;
    }
  } else if (dig === 9) {
    output = f + l;
  }
  return output;
}

function numberConverter(number) {
  const numStr = number.toString();
  let result = [];
  let digIndex = 0;
  for (let i = numStr.length - 1; i >= 0; i--) {
    let y = digitConverter(parseInt(numStr.charAt(i)), digIndex);
    result.unshift(y);
    digIndex++;
  }
  return result.join('');
}


module.exports.digitConverter = digitConverter;
module.exports.numberConverter = numberConverter;

module.exports.eval = numberConverter;