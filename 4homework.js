//1 задание
let number = 4;
let primeCheck = true;
for (let i = 2; i < number; i++) {
  if (number % i === 0) {
      primeCheck = false;
      break;
  }
}

if(primeCheck && number > 1){
  console.log('число  є простим ');
}else{
  console.log('число є складним');
}
//3 задание
let height = 5;
for (let i = 1; i <= height; i++) {
  let line = '';
    for (let k = 0; k < i; k++) {
        line += i;
    }
    console.log(line);
}
