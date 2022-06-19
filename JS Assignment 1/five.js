let n1 = parseInt(process.argv[2]);
let n2 = parseInt(process.argv[3]);
let product = 1;

if (
  n1 < n2 &&
  Math.floor(n1 / 10) % 10 == 4 &&
  Math.floor(n2 / 10) % 10 == 4 &&
  n1 % 2 == 0 &&
  n2 % 2 == 0
) {
  for (let i = n1; i <= n2; i++) {
    product *= i;
  }
  // display final product
  console.log(product);
} else {
  console.log("Given numbers not satisfied conditions");
}
