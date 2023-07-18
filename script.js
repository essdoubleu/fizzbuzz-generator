let range1 = document.getElementById("range1");
let range2 = document.getElementById("range2");

let check1 = document.getElementById("check1");
let check2 = document.getElementById("check2");

let userFizz = document.getElementById("fizz");
let userBuzz = document.getElementById("buzz");
let userFB = document.getElementById("fizzbuzz");

let button = document.getElementById("button");

let fin = document.getElementById("finalStr");

//function to get an array of integers between two given integers
getRange = (r1, r2) => {
  let range = [];
  for (i = r1; i < r2 + 1; i++) {
    range.push(i);
  }
  return range;
};

//function to update H3 with appropriate values
changeH3 = () => {
  fin.innerHTML =
    fin.innerHTML = `Your range is from ${range1.value} to ${range2.value}.  Check 1 is: ${check1.value},  Check 2 is: ${check2.value} `;
};
//initialize the H3 element
changeH3();

//event listeners to check that value of range1, range2, check1, or check2 has been changed and update the h3 element dynamically
range1.addEventListener("input", () => {
  changeH3();
});
range2.addEventListener("input", () => {
  changeH3();
});
check1.addEventListener("input", () => {
  changeH3();
});
check2.addEventListener("input", () => {
  changeH3();
});

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
}

function tieItAllTogether() {
  let userRange = getRange(Number(range1.value), Number(range2.value));
  fizzbuzz(userRange);
}

button.addEventListener("click", () => tieItAllTogether());
