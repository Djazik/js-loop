// N sonigacha bo'lgan sonlar //

// let a = parseInt(Math.random() * 10)
// console.log(`random son ${a}`);
// for (let i = 0; i < a; i++){
//     console.log(i);
// }


// N sonigacha bo'lgan juft sonlar //
// let a = parseInt(Math.random() * 10 )
// console.log(`random son ${a}`);
// for (let i = 0; i < a; i++){
//     if (i % 2 == 0){
//         console.log(i);
//     }
// }

// N sonigacha bo'lgan toq sonlar //
// let a = parseInt(Math.random() * 10 )
// console.log(`random son ${a}`);
// for (let i = 0; i < a; i++){
//     if (i % 2 !== 0){
//         console.log(i);
//     }
// }

// N sonigacha bo'lgan  sonlar yig'indisi //
// let a = parseInt(Math.random() * 10 )
// let result = 0
// console.log(`random son ${a}`);

// for (let i = 0; i <= a; i++){
//     result += i
// }
// console.log(`N sonigacha bo'lgan sonlar yig'indisi ${result}`);

// N sonigacha bo'lgan juft sonlar yig'indisi //
// let a = parseInt(Math.random() * 10 )
// let result = 0
// console.log(`random son ${a}`);

// for (let i = 0; i <= a; i++){
//     if (i % 2 == 0){
//         result += i
//     }
// }
// console.log(`juft sonlar yig'indisi ${result}`);

// N sonigacha bo'lgan toq sonlar yig'indisi //
// let a = parseInt(Math.random() * 10 )
// let result = 0
// console.log(`random son ${a}`);

// for (let i = 0; i <= a; i++){
//     if (i % 2 !== 0){
//         result += i
//     }
// }
// console.log(`toq sonlar yig'indisi ${result}`);


let a = parseInt(Math.random() * 10);
console.log(`random son: ${a}`);

let evenSum = 0;
let oddSum = 0;

for (let i = 0; i <= a; i++) {
  if (i % 2 === 0) {
    evenSum += i;
  } else {
    oddSum += i;
  }
}

console.log(`Juft sonlar yig'indisi: ${evenSum}`);
console.log(`Toq sonlar yig'indisi: ${oddSum}`);
console.log(`Farq: ${Math.abs(evenSum - oddSum)}`);