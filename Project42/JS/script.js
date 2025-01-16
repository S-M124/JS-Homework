let number1 = document.getElementById("firstNumber").innerText;
let number2 = document.getElementById("secondNumber").innerText;
let fullNumber1 = "";
let fullResult = 0;
// numberedButtonsArray = [
zero = document.getElementById("zerobutton");
one = document.getElementById("onebutton");
two = document.getElementById("twobutton");
three = document.getElementById("threebutton");
four = document.getElementById("fourbutton");
five = document.getElementById("fivebutton");
six = document.getElementById("sixbutton");
seven = document.getElementById("sevenbutton");
eight = document.getElementById("eigthbutton");
nine = document.getElementById("ninebutton");
addButton = document.getElementById("addbutton");
subtractButton = document.getElementById("subtractbutton");
multiplyButton = document.getElementById("multiplybutton");
divideButton = document.getElementById("dividebutton");
delButton = document.getElementById("delbutton");
clearButton = document.getElementById("clearbutton");
dotButton = document.getElementById("dotButton");
equalsButton = document.getElementById("equalsbutton");

isButtonPressed = false;
isDivButtonPressed = false;
isMultiplyButtonPressed = false;
isAddButtonPressed = false;
isSubtractButtonPressed = false;
isEqualsButtonPressed = false;
number1DotBoolean = false;
number2DotBoolean = false;

checkForInf = function (
  number1,
  number2,
  isDivButtonPressed,
  isMultiplyButtonPressed
) {
  if (
    number1 === "0" ||
    (number2 === "0" &&
      isDivButtonPressed === true &&
      isEqualsButtonPressed === true)
  ) {
    document.getElementById("firstNumber").innerText = String("Error");
  }

  if (
    number1 === Infinity ||
    (number2 === Infinity && isMultiplyButtonPressed === true)
  )
    document.getElementById("firstNumber").innerText = String(Infinity);
};

checkForAOperator = function (number1, isEqualsButtonPressed) {
  if (
    number2 == "" &&
    isAddButtonPressed === false &&
    isSubtractButtonPressed === false &&
    isDivButtonPressed === false &&
    isMultiplyButtonPressed === false &&
    isEqualsButtonPressed === true
  ) {
    return (document.getElementById("firstNumber").innerText =
      String("number1"));
  } else if (
    number1 == "" &&
    isAddButtonPressed === false &&
    isSubtractButtonPressed === false &&
    isDivButtonPressed === false &&
    isMultiplyButtonPressed === false &&
    isEqualsButtonPressed === true
  ) {
    return (document.getElementById("firstNumber").innerText = "0");
  }
};

checkForAErrorResult = function (number1, number2, isEqualsButtonPressed) {
  if (
    number1 == "0" &&
    number2 == "" &&
    isDivButtonPressed === true &&
    isEqualsButtonPressed === true
  ) {
    number1 = document.getElementById("firstNumber").innerText = "Error";
    number2 = document.getElementById("secondNumber").innerText = "Error";
  }

  if (
    number1 === "0" &&
    number2 === "0" &&
    isDivButtonPressed === true &&
    isEqualsButtonPressed === true
  ) {
    number1 = document.getElementById("firstNumber").innerText = "Error";
    number2 = document.getElementById("secondNumber").innerText = "Error";
  }
};

dotButton.addEventListener("click", function () {
  if (
    isAddButtonPressed === false &&
    isSubtractButtonPressed === false &&
    isDivButtonPressed === false &&
    isMultiplyButtonPressed === false
  ) {
    number1DotBoolean = true;
    number1 = number1 + ".";

    document.getElementById("firstNumber").innerText = String(number1);
  } else if (
    (isAddButtonPressed =
      true ||
      isSubtractButtonPressed === true ||
      isDivButtonPressed === true ||
      isMultiplyButtonPressed === true)
  ) {
    number2 = number2 + ".";
    number2DotBoolean = true;
    document.getElementById("secondNumber").innerText = String(number2);
  }
});

zero.addEventListener("click", function () {
  if (
    isAddButtonPressed === false &&
    isSubtractButtonPressed === false &&
    isDivButtonPressed === false &&
    isMultiplyButtonPressed === false
  ) {
    number1 = number1 + "0";
    document.getElementById("firstNumber").innerText = String(number1);
  } else number2 = number2 + "0";
  document.getElementById("secondNumber").innerText = String(number2);
});

one.addEventListener("click", function () {
  if (
    isAddButtonPressed === false &&
    isSubtractButtonPressed === false &&
    isDivButtonPressed === false &&
    isMultiplyButtonPressed === false
  ) {
    number1 = number1 + "1";
    document.getElementById("firstNumber").innerText = String(number1);
  } else number2 = number2 + "1";
  document.getElementById("secondNumber").innerText = String(number2);
});

two.addEventListener("click", function () {
  if (
    isAddButtonPressed === false &&
    isSubtractButtonPressed === false &&
    isDivButtonPressed === false &&
    isMultiplyButtonPressed === false
  ) {
    number1 = number1 + "2";
    document.getElementById("firstNumber").innerText = String(number1);
  } else number2 = number2 + "2";
  document.getElementById("secondNumber").innerText = String(number2);
});
three.addEventListener("click", function () {
  if (
    isAddButtonPressed === false &&
    isSubtractButtonPressed === false &&
    isDivButtonPressed === false &&
    isMultiplyButtonPressed === false
  ) {
    number1 = number1 + "3";
    document.getElementById("firstNumber").innerText = String(number1);
  } else number2 = number2 + "3";
  document.getElementById("secondNumber").innerText = String(number2);
});
four.addEventListener("click", function () {
  if (
    isAddButtonPressed === false &&
    isSubtractButtonPressed === false &&
    isDivButtonPressed === false &&
    isMultiplyButtonPressed === false
  ) {
    number1 = number1 + "4";
    document.getElementById("firstNumber").innerText = String(number1);
  } else number2 = number2 + "4";
  document.getElementById("secondNumber").innerText = String(number2);
});

five.addEventListener("click", function () {
  if (
    isAddButtonPressed === false &&
    isSubtractButtonPressed === false &&
    isDivButtonPressed === false &&
    isMultiplyButtonPressed === false
  ) {
    number1 = number1 + "5";
    document.getElementById("firstNumber").innerText = String(number1);
  } else number2 = number2 + "5";
  document.getElementById("secondNumber").innerText = String(number2);
});

six.addEventListener("click", function () {
  if (
    isAddButtonPressed === false &&
    isSubtractButtonPressed === false &&
    isDivButtonPressed === false &&
    isMultiplyButtonPressed === false
  ) {
    number1 = number1 + "6";
    document.getElementById("firstNumber").innerText = String(number1);
  } else number2 = number2 + "6";
  document.getElementById("secondNumber").innerText = String(number2);
});

seven.addEventListener("click", function () {
  if (
    isAddButtonPressed === false &&
    isSubtractButtonPressed === false &&
    isDivButtonPressed === false &&
    isMultiplyButtonPressed === false
  ) {
    number1 = number1 + "7";
    document.getElementById("firstNumber").innerText = String(number1);
  } else number2 = number2 + "7";
  document.getElementById("secondNumber").innerText = String(number2);
});

eight.addEventListener("click", function () {
  if (
    isAddButtonPressed === false &&
    isSubtractButtonPressed === false &&
    isDivButtonPressed === false &&
    isMultiplyButtonPressed === false
  ) {
    number1 = number1 + "8";
    document.getElementById("firstNumber").innerText = String(number1);
  } else number2 = number2 + "8";
  document.getElementById("secondNumber").innerText = String(number2);
});

nine.addEventListener("click", function () {
  if (
    isAddButtonPressed === false &&
    isSubtractButtonPressed === false &&
    isDivButtonPressed === false &&
    isMultiplyButtonPressed === false
  ) {
    number1 = number1 + "9";
    document.getElementById("firstNumber").innerText = String(number1);
  } else number2 = number2 + "9";
  document.getElementById("secondNumber").innerText = String(number2);
});

addButton.addEventListener("click", function () {
  if (isAddButtonPressed === false) {
    isAddButtonPressed = true;
    document.getElementById("operator").innerText = String("+");
  } else if (isAddButtonPressed === true) {
    isAddButtonPressed = false;
    document.getElementById("operator").innerText = "";
  }
  console.log(isAddButtonPressed);
});
subtractButton.addEventListener("click", function () {
  if (isSubtractButtonPressed === false) {
    isSubtractButtonPressed = true;
    document.getElementById("operator").innerText = String("-");
  } else if (isSubtractButtonPressed === true) {
    isSubtractButtonPressed = false;
    document.getElementById("operator").innerText = " ";
  }
});
multiplyButton.addEventListener("click", function () {
  if (isMultiplyButtonPressed === false) {
    isMultiplyButtonPressed = true;
    document.getElementById("operator").innerText = String("X");
  } else if (isMultiplyButtonPressed === true) {
    isMultiplyButtonPressed = false;
    document.getElementById("operator").innerText = "";
  }
});
divideButton.addEventListener("click", function () {
  if (isDivButtonPressed === false) {
    isDivButtonPressed = true;
    document.getElementById("operator").innerText = String("÷");
  } else if (isDivButtonPressed === true) {
    isDivButtonPressed = false;
    document.getElementById("operator").innerText = "";
  }
});
delButton.addEventListener("click", function () {
  if (
    isAddButtonPressed === false &&
    isSubtractButtonPressed === false &&
    isDivButtonPressed === false &&
    isMultiplyButtonPressed === false
  ) {
    number1 = number1.slice(0, -1);
    document.getElementById("firstNumber").innerText = String(number1);
  } else if (
    isAddButtonPressed === true ||
    isSubtractButtonPressed === true ||
    isDivButtonPressed === true ||
    isMultiplyButtonPressed === true
  ) {
    number2 = number2.slice(0, -1);
    document.getElementById("secondNumber").innerText = String(number2);
  }
});
clearButton.addEventListener("click", function () {
  number1 = "";
  number2 = "";
  finalResult = "";
  isDivButtonPressed = false;
  isMultiplyButtonPressed = false;
  isAddButtonPressed = false;
  isSubtractButtonPressed = false;
  isEqualsButtonPressed = false;
  number1DotBoolean = false;
  number2DotBoolean = false;

  document.getElementById("firstNumber").innerText = ": ";
  document.getElementById("secondNumber").innerText = "";
  document.getElementById("operator").innerText = "";
});
equalsButton.addEventListener("click", function () {
  document.getElementById("firstNumber").innerText;
  document.getElementById("secondNumber").innerText;
  isEqualsButtonPressed = true;
  checkForAOperator(number1, isEqualsButtonPressed);
  checkForInf(
    number1,
    number2,
    isDivButtonPressed,
    isMultiplyButtonPressed,
    isEqualsButtonPressed
  );

  document.getElementById("operator").innerText = String("=");
  if (
    number1DotBoolean != true &&
    number2DotBoolean != true &&
    isAddButtonPressed === true &&
    isEqualsButtonPressed === true
  ) {
    document.getElementById("firstNumber").innerText = number1;
    document.getElementById("secondNumber").innerText = number2;

    number1 = parseInt(number1);
    number2 = parseInt(number2);

    console.log(number1);
    console.log(typeof number1);
    console.log(number2);
    console.log(typeof number2);

    finalResult = parseInt(number1 + number2);

    document.getElementById("firstNumber").innerText = String(finalResult);
    document.getElementById("secondNumber").innerText = "";
  }

  if (
    number1DotBoolean != true &&
    number2DotBoolean != true &&
    isSubtractButtonPressed === true &&
    isEqualsButtonPressed === true
  ) {
    document.getElementById("firstNumber").innerText = number1;
    document.getElementById("secondNumber").innerText = number2;

    number1 = parseInt(number1);
    number2 = parseInt(number2);
    finalResult = parseInt(number1 - number2);

    document.getElementById("firstNumber").innerText = String(finalResult);
    document.getElementById("secondNumber").innerText = "";
  }

  if (
    number1DotBoolean != true &&
    number2DotBoolean != true &&
    isMultiplyButtonPressed === true &&
    isEqualsButtonPressed === true
  ) {
    document.getElementById("firstNumber").innerText = number1;
    document.getElementById("secondNumber").innerText = number2;

    number1 = parseInt(number1);
    number2 = parseInt(number2);

    finalResult = parseInt(number1 * number2);

    document.getElementById("firstNumber").innerText = String(finalResult);
    document.getElementById("secondNumber").innerText = "";
  }
  if (
    number1DotBoolean === false &&
    number2DotBoolean === false &&
    isDivButtonPressed === true &&
    isEqualsButtonPressed === true
  ) {
    document.getElementById("firstNumber").innerText = number1;
    document.getElementById("secondNumber").innerText = number2;

    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    finalResult = parseFloat(number1 / number2);

    document.getElementById("firstNumber").innerText = String(finalResult);
    document.getElementById("secondNumber").innerText = "";
  }

  if (
    number1DotBoolean === true ||
    (number2DotBoolean === true &&
      isDivButtonPressed === true &&
      isEqualsButtonPressed === true)
  ) {
    document.getElementById("firstNumber").innerText = number1;
    document.getElementById("secondNumber").innerText = number2;

    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    finalResult = parseFloat(number1 / number2);

    document.getElementById("firstNumber").innerText = String(finalResult);
    document.getElementById("secondNumber").innerText = "";
  }

  if (
    number1DotBoolean === true &&
    number2DotBoolean === true &&
    isDivButtonPressed === true &&
    isEqualsButtonPressed === true
  ) {
    document.getElementById("firstNumber").innerText = number1;
    document.getElementById("secondNumber").innerText = number2;

    number1 = parseFloat(number1);
    number2 = parseFloat(number2);
    finalResult = parseFloat(number1 / number2);

    document.getElementById("firstNumber").innerText = String(finalResult);
    document.getElementById("secondNumber").innerText = "";
  }
});
