let num = parseInt(process.argv[2]);

let even = 0;
let remainder = 0;

let i = num;
while(i>0) {
  remainder = i%10;
  if (remainder%2==0){
    console.log(remainder);
  }
  i = Math.floor(i/10);
}