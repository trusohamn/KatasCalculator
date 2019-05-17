/*for (let i = 1; i <= 100; i++) {
    console.log(fizzBuzz(i));
  }
  */
  function fizzBuzz(num) {
  
    let output = '';
    if (num % 3 === 0 || numberContainsDigit(3, num)) {
      output += 'Fizz';
    }
    if (num % 5 === 0 || numberContainsDigit(5, num)) {
      output += 'Buzz';
    }
    if (output === '') {
      output = num;
    }
    return output;
  }
  
  function numberContainsDigit(digit, number) {
    number = number.toString();
    return number.indexOf(digit) >= 0;
  }
  
  module.exports.eval = fizzBuzz;