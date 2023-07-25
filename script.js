let range1 = document.getElementById("range1");
let range2 = document.getElementById("range2");

let check1 = document.getElementById("check1");
let check2 = document.getElementById("check2");

let fizzTxt = document.getElementById("fizzLabel");
let buzzTxt = document.getElementById("buzzLabel");
let fbTxt = document.getElementById("fizzBuzzLabel");

let userFizz = document.getElementById("fizz");
let userBuzz = document.getElementById("buzz");
let userFB = document.getElementById("fizzbuzz");

let button = document.getElementById("button");

let fin = document.getElementById("finalStr");
let realFinalStr = document.getElementById("strOutput");

let code = document.getElementById("codeDisplay");

//function to get an array of integers between the two given integers
getRange = (r1, r2) => {
  let range = [];
  for (i = r1; i < r2 + 1; i++) {
    range.push(i);
  }
  return range;
};

//function to update textArea with user generated fizzbuzz function
changeTextArea = () => {
  code.innerHTML = `
  function yourFizzBuzz(arr){
    for (i = 0; i < arr.length; i++) {
      if (arr[i] % \`${check1.value}\` == 0 && arr[i] % \`${check2.value}\` == 0) {
        console.log("\`${userFB.value}\`");
      } else if (arr[i] % \`${check2.value}\` == 0) {
        console.log("\`${userBuzz.value}\`");
      } else if (arr[i] % \`${check1.value}\` == 0) {
        console.log("\`${userFizz.value}\`");
      } else {
        console.log(arr[i]);
      }
    }
}`.replaceAll("`", "");
};

// functions to update labels
changeLabel1 = () => {
  fizzTxt.innerHTML = `If integer is divisble by ${check1.value}, it will be replaced by:`;
};
changeLabel2 = () => {
  buzzTxt.innerHTML = `If integer is divisble by ${check2.value}, it will be replaced by:`;
};
changeLabel3 = () => {
  fbTxt.innerHTML = `If integer is divisble by ${check1.value} AND ${check2.value}, it will be replaced by:`;
};

//function to update H3 with appropriate values
changeH3 = () => {
  fin.innerHTML =
    fin.innerHTML = `You will receive an output of integers from ${range1.value} to ${range2.value}.  If an integer is dvisible by ${check1.value}, it will be replaced by ${userFizz.value}.  If an integer is divisible by ${check2.value}, it will be replaced by ${userBuzz.value}.  If an integer is divisble by BOTH ${check1.value} and ${check2.value}, it will be replaced by ${userFB.value}`;
};
//initialize the H3 element
changeH3();

//event listeners to check that value of range1, range2, check1, or check2 has been changed and update the text elements dynamically
range1.addEventListener("input", () => {
  changeH3();
});
range2.addEventListener("input", () => {
  changeH3();
});
userFizz.addEventListener("input", () => {
  changeH3();
});
userBuzz.addEventListener("input", () => {
  changeH3();
});
userFB.addEventListener("input", () => {
  changeH3();
});
check1.addEventListener("input", () => {
  changeH3();
  changeLabel1();
  changeLabel3();
});
check2.addEventListener("input", () => {
  changeH3();
  changeLabel2();
  changeLabel3();
});

//function to take user inputs and create a fizzbuzz out of it
function fizzbuzz(arr) {
  let strOut = ``;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] % check1.value == 0 && arr[i] % check2.value == 0) {
      console.log(`${userFB.value}`);
      strOut += `${userFB.value}, `;
    } else if (arr[i] % check2.value == 0) {
      strOut += `${userBuzz.value}, `;
      console.log(`${userBuzz.value}`);
    } else if (arr[i] % check1.value == 0) {
      strOut += `${userFizz.value}, `;
      console.log(`${userFizz.value}`);
    } else {
      strOut += `${arr[i]}, `;
      console.log(arr[i]);
    }
  }
  realFinalStr.innerHTML = strOut;
}

function tieItAllTogether() {
  let userRange = getRange(Number(range1.value), Number(range2.value));
  fizzbuzz(userRange);
  changeTextArea();
  console.log(code);
}

button.addEventListener("click", () => tieItAllTogether());
