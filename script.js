let range1 = document.getElementById("range1");
let range2 = document.getElementById("range2");

let check1 = document.getElementById("check1");
let check2 = document.getElementById("check2");

let userFizz = document.getElementById("fizz");
let userBuzz = document.getElementById("buzz");
let userFB = document.getElementById("fizzbuzz");

let button = document.getElementById("button");

let fin = document.getElementById("finalStr");

const test = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

getRange = (r1, r2) => {
  let range = [];
  let i = 0;
  //initial iterator should be r1
  //while iterator is >=r1 and <r2, iterate by 1
  //push that number into array "range"
};

// function fizzbuzz(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] % 5 == 0 && arr[i] % 3 == 0) {
//       console.log("FizzBuzz");
//     } else if (arr[i] % 5 == 0) {
//       console.log("Buzz");
//     } else if (arr[i] % 3 == 0) {
//       console.log("Fizz");
//     } else {
//       console.log(arr[i]);
//     }
//   }
// }

//function to take user inputs and create a fizzbuzz out of it
function fizzbuzz(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 5 == 0 && arr[i] % 3 == 0) {
      console.log(`${userFB.value}`);
    } else if (arr[i] % 5 == 0) {
      console.log(`${userBuzz.value}`);
    } else if (arr[i] % 3 == 0) {
      console.log(`${userFizz.value}`);
    } else {
      console.log(arr[i]);
    }
  }
  fin.innerHTML = `Your range is from ${range1.value} to ${range2.value}.  Check 1 is: ${check1.value},  Check 2 is: ${check2.value} `;
}

// logFizz = () => {
//   console.log(userFizz.value);
// };

// logBuzz = () => {
//   console.log(userBuzz.value);
// };

// logFB = () => {
//   console.log(userFB.value);
// };

// button.addEventListener("click", () => logFizz());
// button.addEventListener("click", () => logBuzz());
// button.addEventListener("click", () => logFB());
button.addEventListener("click", () => fizzbuzz(test));
