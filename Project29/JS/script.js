let numberArray = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

separator(numberArray);

function separator(numberArray, stringNeeded, oddResult, evenResult) {
    stringNeeded = " ";
    oddResult = "";
    evenResult = "";
    for (let i = 0; i < numberArray.length; i++) {
        if (numberArray[i] % 2 === 0) {
            evenResult = evenResult + numberArray[i] + "\n";
        } else if (numberArray[i] % 2 !== 0) {
            oddResult = oddResult + numberArray[i] + stringNeeded;
        }
    }
    console.log(evenResult);
    console.log(oddResult);
}