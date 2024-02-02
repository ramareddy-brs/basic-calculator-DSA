function calculate(s) {
  let stack = [];
  let num = 0;
  let sign = 1;
  let result = 0;

  for (let i = 0; i < s.length; i++) {
      const char = s.charAt(i);

      if (char >= '0' && char <= '9') {
          num = num * 10 + parseInt(char);
      } else if (char === '+') {
          result += sign * num;
          num = 0;
          sign = 1;
      } else if (char === '-') {
          result += sign * num;
          num = 0;
          sign = -1;
      } else if (char === '(') {
          stack.push(result);
          stack.push(sign);
          result = 0;
          sign = 1;
      } else if (char === ')') {
          result += sign * num;
          num = 0;

          result *= stack.pop(); // pop sign
          result += stack.pop(); // pop result from the corresponding '('
      }
  }

  result += sign * num;

  return result;
}


console.log(calculate("1 + 1"));