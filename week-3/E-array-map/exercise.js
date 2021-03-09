// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

let numbers = [0.2, 0.5, 0.1, 0.7, 1, 0.2, 0.3, 0.4, 0.5];

const numbersMultiplied = numbers
.map((num) => num * 100)
.filter((num) => num > 35)
.sort()
.forEach((num) => console.log(num));

