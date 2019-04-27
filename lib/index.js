function cardValidator(numbers) {
  const input = validateUserInput(numbers);
  if (input === false) {
    return false;
  } else {
    return numbers.split('')
      .reverse()
      .map((num) => parseInt(num))
      .map((num, index) => index % 2 ? num * 2 : num)
      .map((num) => num > 9 ? (num % 10) + 1 : num)
      .reduce((accum, num) => accum += num) % 10 === 0;
  }
}

function validateUserInput(userInput) {
  if (userInput === '' || typeof userInput !== 'string') {
    return false;
  }
}
