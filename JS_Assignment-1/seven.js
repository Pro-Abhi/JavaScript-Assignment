let num = parseInt(process.argv[2]);

let n = num;
let reverseNum = 0;
while (n > 0) {
  reverseNum = reverseNum * 10 + (n % 10);
  n = Math.floor(n / 10);
}

// Check if rev_n and n are same or not.
if (reverseNum == num) {
  console.log("YES")
} else {
  console.log("NO")
}