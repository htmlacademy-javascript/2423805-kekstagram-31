
// const checkStringLength = (string = '', maxSymbols = 1) => string.length <= maxSymbols;

// checkStringLength('проверяемая строка', 20);
// console.log(checkStringLength('проверяемая строка', 20));
// console.log(checkStringLength('проверяемая строка', 18));
// console.log(checkStringLength('проверяемая строка', 10));


// const isPalindrome = (string) => {
//   string = string.replaceAll(' ', '');
//   string = string.toLowerCase();

//   let backString = '';

//   for (let i = string.length - 1; i >= 0; i--) {
//     backString += string[i];
//   }

//   return string === backString;

// };


// console.log(isPalindrome('Лёша на полке клопа нашёл'));

const getNumbers = (string) => {
  let value = '';

  string = string.toString();

  for (let i = 0; i <= string.length - 1; i++) {
    if(Number.isNaN(parseInt(string[i], 10)) === false) {
      value += string[i];
    }
  }

  return value === '' ? NaN : Number(value);
};

console.log(getNumbers('2024 год'));
