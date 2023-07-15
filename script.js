let userFizz = document.getElementById("fizz");
let userBuzz = document.getElementById("buzz");
let userFB = document.getElementById("fizzbuzz");
let button = document.getElementById("button");

const test = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

function fizzbuzz(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % 5 == 0 && arr[i] % 3 == 0) {
      console.log("FizzBuzz");
    } else if (arr[i] % 5 == 0) {
      console.log("Buzz");
    } else if (arr[i] % 3 == 0) {
      console.log("Fizz");
    } else {
      console.log(arr[i]);
    }
  }
}

console.log(userFizz.value);

button.addEventListener("click", () => fizzbuzz(test));
