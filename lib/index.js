function cardValidator(numbers) {
  return numbers.split('')
    .reverse()
    .map((num) => parseInt(num))
    .map((num, index) => index % 2 ? num * 2 : num)
    .map((num) => num > 9 ? (num % 10) + 1 : num)
    .reduce((accum, num) => accum += num) % 10 === 0;
}

console.log('cardValidator(5374661040114189): ', cardValidator('5374661040114189'));