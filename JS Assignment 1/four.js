
let number = parseInt(process.argv[2])
let sum = 0;

let n = number;
while (n > 0) {
  let remainder = n % 10;

  sum += remainder ** 3;

  // removing last digit from the number
  n = Math.floor(n / 10);
}

// check the condition
if (sum == number) {
  console.log("YES");
} else {
  console.log("NO");
}
