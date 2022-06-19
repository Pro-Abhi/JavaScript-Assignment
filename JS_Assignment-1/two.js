let num1 = parseInt(process.argv[2]);
let num2 = parseInt(process.argv[3]);
let sum = 0;
for (i = num1; i <= num2; i++) {
  if (i % 2 == 0) {
    sum = sum + i;
  }
}
console.log(sum);
