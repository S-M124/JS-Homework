let neededArray = [];
let bigPrintedLine = "";

fillInTheArray(neededArray, bigPrintedLine);
printString(neededArray, bigPrintedLine);

function fillInTheArray(neededArray, userInput, amountOfVariables) {
  amountOfVariables = 5;
  for (let i = 0; i <= amountOfVariables; i++) {
    neededArray.push(
      (userInput = prompt(
        "Enter A 6 Inputs (Words Or Numbers) To Be Printed Out"
      ))
    );
  }
}

function printString(neededArray, bigPrintedLine) {
  for (let j = 0; j < neededArray.length; j++) {
    bigPrintedLine = bigPrintedLine + " " + neededArray[j];
  }

  console.log(bigPrintedLine);
}
