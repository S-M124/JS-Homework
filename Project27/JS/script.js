let arraySum = [];

sumOfFive(arraySum);

function sumOfFive(arraySum, number) {
  while (arraySum.length < 5) {
    number = parseInt(prompt("Enter a number"));
    validator(number, arraySum);
  }
  let result = 0;
  for (let i = 0; i < arraySum.length; i++) {
    result += arraySum[i];
  }
  console.log("The sum of the five numbers is:", result);
}

function validator(number, arraySum) {
  if (!isNaN(number)) {
    arraySum.push(number);
  } else {
    console.log("Invalid input. Please enter a valid number.");
  }
}
