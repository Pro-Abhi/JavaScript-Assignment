let num = parseInt(process.argv[2]);

let firstDigit, lastDigit;

lastDigit = num % 10;

while (num >= 10) {
  firstDigit = Math.floor((num /= 10));
}

console.log(firstDigit);
console.log(lastDigit);
