let submitButton = document.getElementById("numberToTextButton");
submitButton.addEventListener("click", function () {
  let stringNumber = String(document.getElementById("numberInput").value);
  let stringArray = stringNumber.split("");
  console.log(stringArray);
  let numberValue = Number(stringNumber);

  if (isNaN(numberValue) || numberValue < 0) {
    alert("Please enter a valid number.");
    return;
  }

  if (numberValue > 1000000) {
    alert("Please enter a valid number up to 1,000,000");
    return;
  }

  if (stringNumber.indexOf(".") !== -1 || stringNumber.indexOf("-") !== -1) {
    alert("Please remove all special characters like dots");
    return;
  }
  // Searching on stack overflow for a answer as my logic was flawed & found indexOF gives -1 when something isn't found & 0 when it is.

  if (stringArray.length === 0) {
    alert("Please remove all special characters & enter a valid number");
  }
  if (stringArray.length === 7 && !isNaN(stringNumber)) {
    let output = "";
    let zeroChecker = 0;

    for (let i = 0; i < stringArray.length; i++) {
      if (stringArray[i] === "1") {
        output += "one";
      } else if (stringArray[i] === "0") {
        zeroChecker++;
        if (zeroChecker === 6) {
          output = "one-million";
          document.getElementById("numberIntoTextOutput").value = output;
        }
      }
    }
  }
  if (stringArray.length === 6 && !isNaN(stringNumber)) {
    let output = "";
    for (let l = 0; l < stringArray.length; l++) {
      if (l === 0) {
        switch (stringArray[l]) {
          case "1":
            if (stringArray[0] === "1") output += "one hundred ";
          case "2":
            if (stringArray[0] === "2") output += "two hundred ";
          case "3":
            if (stringArray[0] === "3") output += "three hundred ";
          case "4":
            if (stringArray[0] === "4") output += "four hundred ";
          case "5":
            if (stringArray[0] === "5") output += "five hundred ";
          case "6":
            if (stringArray[0] === "6") output += "six hundred ";
          case "7":
            if (stringArray[0] === "7") output += "seven hundred ";
          case "8":
            if (stringArray[0] === "8") output += "eight hundred ";
          case "9":
            if (stringArray[0] === "9") output += "nine hundred ";
            break;
        }
      } else if (l === 1) {
        switch (stringArray[l]) {
          case "0":
            if (stringArray[1] === "0") output += "";
          case "1":
            if (stringArray[1] === "1" && stringArray[2] === "0")
              output += "ten ";
            if (stringArray[1] === "1" && stringArray[2] === "1")
              output += "eleven ";
            if (stringArray[1] === "1" && stringArray[2] === "2")
              output += "twelve ";
            if (stringArray[1] === "1" && stringArray[2] === "3")
              output += "thirteen ";
            if (stringArray[1] === "1" && stringArray[2] === "4")
              output += "fourteen ";
            if (stringArray[1] === "1" && stringArray[2] === "5")
              output += "fifteen ";
            if (stringArray[1] === "1" && stringArray[2] === "6")
              output += "sixteen ";
            if (stringArray[1] === "1" && stringArray[2] === "7")
              output += "seventeen ";
            if (stringArray[1] === "1" && stringArray[2] === "8")
              output += "eighteen ";
            if (stringArray[1] === "1" && stringArray[2] === "9")
              output += "nineteen ";
          case "2":
            if (stringArray[1] === "2") output += "twenty ";
          case "3":
            if (stringArray[1] === "3") output += "thirty ";
          case "4":
            if (stringArray[1] === "4") output += "forty ";
          case "5":
            if (stringArray[1] === "5") output += "fifty ";
          case "6":
            if (stringArray[1] === "6") output += "sixty ";
          case "7":
            if (stringArray[1] === "7") output += "seventy ";
          case "8":
            if (stringArray[1] === "8") output += "eighty ";
          case "9":
            if (stringArray[1] === "9") output += "ninety ";

            if (stringArray[1] !== "0" && stringArray[2] === "0")
              output += "thousand ";
            break;
        }
      } else if (l === 2) {
        switch (stringArray[l]) {
          case "0":
            if (stringArray[2] === "0") output += "";
          case "1":
            if (stringArray[2] === "1" && stringArray[1] !== "1")
              output += "one ";
          case "2":
            if (stringArray[2] === "2" && stringArray[1] !== "1")
              output += "two  ";
          case "3":
            if (stringArray[2] === "3" && stringArray[1] !== "1")
              output += "three ";
          case "4":
            if (stringArray[2] === "4" && stringArray[1] !== "1")
              output += "four ";
          case "5":
            if (stringArray[2] === "5" && stringArray[1] !== "1")
              output += "five ";
          case "6":
            if (stringArray[2] === "6" && stringArray[1] !== "1")
              output += "six ";
          case "7":
            if (stringArray[2] === "7" && stringArray[1] !== "1")
              output += "seven ";
          case "8":
            if (stringArray[2] === "8" && stringArray[1] !== "1")
              output += "eight ";
          case "9":
            if (stringArray[2] === "9" && stringArray[1] !== "1")
              output += "nine ";
            if (stringArray[2] != "0") output += "thousand ";
            break;
        }
      } else if (l === 3) {
        switch (stringArray[l]) {
          case "0":
            if (stringArray[3] === "0") output += "";
          case "1":
            if (stringArray[3] === "1") output += "one ";
          case "2":
            if (stringArray[3] === "2") output += "two ";
          case "3":
            if (stringArray[3] === "3") output += "three ";
          case "4":
            if (stringArray[3] === "4") output += "four ";
          case "5":
            if (stringArray[3] === "5") output += "five ";
          case "6":
            if (stringArray[3] === "6") output += "six ";
          case "7":
            if (stringArray[3] === "7") output += "seven ";
          case "8":
            if (stringArray[3] === "8") output += "eight ";
          case "9":
            if (stringArray[3] === "9") output += "nine ";
            if (stringArray[3] !== "0") output += "hundred ";
            break;
        }
      } else if (l === 4) {
        switch (stringArray[l]) {
          case "0":
            if (stringArray[4] === "0") output += "";
          case "1":
            if (stringArray[4] === "1" && stringArray[5] === "0")
              output += "ten ";
            if (stringArray[4] === "1" && stringArray[5] === "1")
              output += "eleven ";

            if (stringArray[4] === "1" && stringArray[5] === "2")
              output += "twelve ";

            if (stringArray[4] === "1" && stringArray[5] === "3")
              output += "thirteen ";
            if (stringArray[4] === "1" && stringArray[5] === "4")
              output += "fourteen ";
            if (stringArray[4] === "1" && stringArray[5] === "5")
              output += "fifteen ";
            if (stringArray[4] === "1" && stringArray[5] === "6")
              output += "sixteen ";
            if (stringArray[4] === "1" && stringArray[5] === "7")
              output += "seventeen ";
            if (stringArray[4] === "1" && stringArray[5] === "8")
              output += "eighteen ";
            if (stringArray[4] === "1" && stringArray[5] === "9")
              output += "nineteen ";
          case "2":
            if (stringArray[4] === "2") output += "twenty ";
          case "3":
            if (stringArray[4] === "3") output += "thirty ";
          case "4":
            if (stringArray[4] === "4") output += "forty ";
          case "5":
            if (stringArray[4] === "5") output += "fifty ";
          case "6":
            if (stringArray[4] === "6") output += "sixty ";
          case "7":
            if (stringArray[4] === "7") output += "seventy ";
          case "8":
            if (stringArray[4] === "8") output += "eighty ";
          case "9":
            if (stringArray[4] === "9") output += "ninety ";
            break;
        }
      } else if (l === 5) {
        switch (stringArray[l]) {
          case "0":
            if (stringArray[5] === "0") output += "";
          case "1":
            if (stringArray[5] === "1" && stringArray[4] !== "1")
              output += "one ";
          case "2":
            if (stringArray[5] === "2" && stringArray[4] !== "1")
              output += "two ";
          case "3":
            if (stringArray[5] === "3" && stringArray[4] !== "1")
              output += "three ";
          case "4":
            if (stringArray[5] === "4" && stringArray[4] !== "1")
              output += "four ";
          case "5":
            if (stringArray[5] === "5" && stringArray[4] !== "1")
              output += "five ";
          case "6":
            if (stringArray[5] === "6" && stringArray[4] !== "1")
              output += "six ";
          case "7":
            if (stringArray[5] === "7" && stringArray[4] !== "1")
              output += "seven ";
          case "8":
            if (stringArray[5] === "8" && stringArray[4] !== "1")
              output += "eight ";
          case "9":
            if (stringArray[5] === "9" && stringArray[4] !== "1")
              output += "nine ";

            break;
        }
      }
    }
    document.getElementById("numberIntoTextOutput").value = output;
  } else if (stringArray.length === 5 && !isNaN(stringNumber)) {
    let output = "";
    for (let k = 0; k < stringArray.length; k++) {
      if (k === 0) {
        switch (stringArray[k]) {
          case "1":
            if (stringArray[0] === "1" && stringArray[1] === "0")
              output += "ten ";
            if (stringArray[0] === "1" && stringArray[1] === "1")
              output += "eleven ";

            if (stringArray[0] === "1" && stringArray[1] === "2")
              output += "twelve ";
            if (stringArray[0] === "1" && stringArray[1] === "3")
              output += "thirteen ";
            if (stringArray[0] === "1" && stringArray[1] === "4")
              output += "fourteen ";
            if (stringArray[0] === "1" && stringArray[1] === "5")
              output += "fifteen ";
            if (stringArray[0] === "1" && stringArray[1] === "6")
              output += "sixteen ";
            if (stringArray[0] === "1" && stringArray[1] === "7")
              output += "seventeen ";
            if (stringArray[0] === "1" && stringArray[1] === "8")
              output += "eighteen ";
            if (stringArray[0] === "1" && stringArray[1] === "9")
              output += "nineteen ";
          case "2":
            if (stringArray[0] === "2") output += "twenty ";
          case "3":
            if (stringArray[0] === "3") output += "thirty ";
          case "4":
            if (stringArray[0] === "4") output += "forty ";
          case "5":
            if (stringArray[0] === "5") output += "fifty ";
          case "6":
            if (stringArray[0] === "6") output += "sixty ";
          case "7":
            if (stringArray[0] === "7") output += "seventy ";
          case "8":
            if (stringArray[0] === "8") output += "eighty ";
          case "9":
            if (stringArray[1] === "9") output += "ninety ";
            if (stringArray[1] === "0") output += "thousand ";
            break;
        }
      } else if (k === 1) {
        switch (stringArray[k]) {
          case "0":
            if (stringArray[1] === "0" && stringArray[0] != "1") output += "";
          case "1":
            if (stringArray[1] === "1" && stringArray[0] != "1")
              output += "one ";
          case "2":
            if (stringArray[1] === "2" && stringArray[0] != "1")
              output += "two ";
          case "3":
            if (stringArray[1] === "3" && stringArray[0] != "1")
              output += "three ";
          case "4":
            if (stringArray[1] === "4" && stringArray[0] != "1")
              output += "four ";
          case "5":
            if (stringArray[1] === "5" && stringArray[0] != "1")
              output += "five ";
          case "6":
            if (stringArray[1] === "6" && stringArray[0] != "1")
              output += "six ";
          case "7":
            if (stringArray[1] === "7" && stringArray[0] != "1")
              output += "seven ";
          case "8":
            if (stringArray[1] === "8" && stringArray[0] != "1")
              output += "eight ";
          case "9":
            if (stringArray[1] === "9" && stringArray[0] != "1")
              output += "nine ";

            if (stringArray[1] != "0") output += "thousand ";
            break;
        }
      } else if (k === 2) {
        switch (stringArray[k]) {
          case "0":
            if (stringArray[2] === "0") output += "";
          case "1":
            if (stringArray[2] === "1") output += "one ";
          case "2":
            if (stringArray[2] === "2") output += "two  ";
          case "3":
            if (stringArray[2] === "3") output += "three ";
          case "4":
            if (stringArray[2] === "4") output += "four ";
          case "5":
            if (stringArray[2] === "5") output += "five ";
          case "6":
            if (stringArray[2] === "6") output += "six ";
          case "7":
            if (stringArray[2] === "7") output += "seven ";
          case "8":
            if (stringArray[2] === "8") output += "eight ";
          case "9":
            if (stringArray[2] === "9") output += "nine ";
            if (stringArray[2] !== "0") output += "hundred ";
            break;
        }
      } else if (k === 3) {
        switch (stringArray[k]) {
          case "0":
            if (stringArray[3] === "0") output += "";
          case "1":
            if (stringArray[3] === "1" && stringArray[4] === "0")
              output += "ten ";
            if (stringArray[3] === "1" && stringArray[4] === "1")
              output += "eleven";

            if (stringArray[3] === "1" && stringArray[4] === "2")
              output += "twelve ";
            if (stringArray[3] === "1" && stringArray[4] === "3")
              output += "thirteen ";
            if (stringArray[3] === "1" && stringArray[4] === "4")
              output += "fourteen ";
            if (stringArray[3] === "1" && stringArray[4] === "5")
              output += "fifteen ";
            if (stringArray[3] === "1" && stringArray[4] === "6")
              output += "sixteen ";
            if (stringArray[3] === "1" && stringArray[4] === "7")
              output += "seventeen ";
            if (stringArray[3] === "1" && stringArray[4] === "8")
              output += "eighteen ";
            if (stringArray[3] === "1" && stringArray[4] === "9")
              output += "nineteen ";
          case "2":
            if (stringArray[3] === "2") output += "twenty ";
          case "3":
            if (stringArray[3] === "3") output += "thirty ";
          case "4":
            if (stringArray[3] === "4") output += "forty ";
          case "5":
            if (stringArray[3] === "5") output += "fifty ";
          case "6":
            if (stringArray[3] === "6") output += "sixty ";
          case "7":
            if (stringArray[3] === "7") output += "seventy ";
          case "8":
            if (stringArray[3] === "8") output += "eighty ";
          case "9":
            if (stringArray[3] === "9") output += "ninety ";
            break;
        }
      } else if (k === 4) {
        switch (stringArray[k]) {
          case "0":
            if (stringArray[4] === "0") output += "";
          case "1":
            if (stringArray[4] === "1" && stringArray[3] != "1")
              output += "one ";
          case "2":
            if (stringArray[4] === "2" && stringArray[3] != "1")
              output += "two ";
          case "3":
            if (stringArray[4] === "3" && stringArray[3] != "1")
              output += "three ";
          case "4":
            if (stringArray[4] === "4" && stringArray[3] != "1")
              output += "four ";
          case "5":
            if (stringArray[4] === "5" && stringArray[3] != "1")
              output += "five ";
          case "6":
            if (stringArray[4] === "6" && stringArray[3] != "1")
              output += "six ";
          case "7":
            if (stringArray[4] === "7" && stringArray[3] != "1")
              output += "seven ";
          case "8":
            if (stringArray[4] === "8" && stringArray[3] != "1")
              output += "eight ";
          case "9":
            if (stringArray[4] === "9" && stringArray[3] != "1")
              output += "nine ";
            break;
        }
      }
    }
    document.getElementById("numberIntoTextOutput").value = output;
  } else if (stringArray.length === 4 && !isNaN(stringNumber)) {
    let output = "";
    for (let e = 0; e < stringArray.length; e++) {
      if (e === 0) {
        switch (stringArray[e]) {
          case "1":
            if (stringArray[0] === "1") output += "one ";
          case "2":
            if (stringArray[0] === "2") output += "two ";
          case "3":
            if (stringArray[0] === "3") output += "three ";
          case "4":
            if (stringArray[0] === "4") output += "four ";
          case "5":
            if (stringArray[0] === "5") output += "five ";
          case "6":
            if (stringArray[0] === "6") output += "six ";
          case "7":
            if (stringArray[0] === "7") output += "seven ";
          case "8":
            if (stringArray[0] === "8") output += "eight ";
          case "9":
            if (stringArray[0] === "9") output += "nine ";
            if (stringArray[0] !== "0") output += "thousand ";
            break;
        }
      } else if (e === 1) {
        switch (stringArray[e]) {
          case "0":
            if (stringArray[1] === "0") output += "";
          case "1":
            if (stringArray[1] === "1") output += "one ";
          case "2":
            if (stringArray[1] === "2") output += "two ";
          case "3":
            if (stringArray[1] === "3") output += "three ";
          case "4":
            if (stringArray[1] === "4") output += "four ";
          case "5":
            if (stringArray[1] === "5") output += "five ";
          case "6":
            if (stringArray[1] === "6") output += "six ";
          case "7":
            if (stringArray[1] === "7") output += "seven ";
          case "8":
            if (stringArray[1] === "8") output += "eight ";
          case "9":
            if (stringArray[1] === "9") output += "nine ";

            if (stringArray[1] != "0") output += "hundred ";
            break;
        }
      } else if (e === 2) {
        switch (stringArray[e]) {
          case "0":
            if (stringArray[2] === "0") output += "";
          case "1":
            if (stringArray[2] === "1" && stringArray[3] === "0")
              output += "ten ";
            if (stringArray[2] === "1" && stringArray[3] === "1")
              output += "eleven ";

            if (stringArray[2] === "1" && stringArray[3] === "2")
              output += "twelve ";
            if (stringArray[2] === "1" && stringArray[3] === "3")
              output += "thirteen ";
            if (stringArray[2] === "1" && stringArray[3] === "4")
              output += "fourteen ";
            if (stringArray[2] === "1" && stringArray[3] === "5")
              output += "fifteen ";
            if (stringArray[2] === "1" && stringArray[3] === "6")
              output += "sixteen ";
            if (stringArray[2] === "1" && stringArray[3] === "7")
              output += "seventeen ";
            if (stringArray[2] === "1" && stringArray[3] === "8")
              output += "eighteen ";
            if (stringArray[2] === "1" && stringArray[3] === "9")
              output += "nineteen ";
          case "2":
            if (stringArray[2] === "2") output += "twenty ";
          case "3":
            if (stringArray[2] === "3") output += "thirty ";
          case "4":
            if (stringArray[2] === "4") output += "forty ";
          case "5":
            if (stringArray[2] === "5") output += "fifty ";
          case "6":
            if (stringArray[2] === "6") output += "sixty ";
          case "7":
            if (stringArray[2] === "7") output += "seventy ";
          case "8":
            if (stringArray[2] === "8") output += "eighty ";
          case "9":
            if (stringArray[2] === "9") output += "ninety ";
            break;
        }
      } else if (e === 3) {
        switch (stringArray[e]) {
          case "0":
            if (stringArray[3] === "0") output += "";
          case "1":
            if (stringArray[3] === "1" && stringArray[2] != "1")
              output += "one ";
          case "2":
            if (stringArray[3] === "2" && stringArray[2] != "1")
              output += "two ";
          case "3":
            if (stringArray[3] === "3" && stringArray[2] != "1")
              output += "three ";
          case "4":
            if (stringArray[3] === "4" && stringArray[2] != "1")
              output += "four ";
          case "5":
            if (stringArray[3] === "5" && stringArray[2] != "1")
              output += "five ";
          case "6":
            if (stringArray[3] === "6" && stringArray[2] != "1")
              output += "six ";
          case "7":
            if (stringArray[3] === "7" && stringArray[2] != "1")
              output += "seven ";
          case "8":
            if (stringArray[3] === "8" && stringArray[2] != "1")
              output += "eight ";
          case "9":
            if (stringArray[3] === "9" && stringArray[2] != "1")
              output += "nine ";
            break;
        }
      }
    }
    document.getElementById("numberIntoTextOutput").value = output;
  }
  if (stringArray.length === 3 && !isNaN(stringNumber)) {
    let output = "";
    for (let t = 0; t < stringArray.length; t++) {
      if (t === 0) {
        switch (stringArray[t]) {
          case "0":
            if (stringArray[0] === "0") output += "";
          case "1":
            if (stringArray[0] === "1") output += "one ";
          case "2":
            if (stringArray[0] === "2") output += "two ";
          case "3":
            if (stringArray[0] === "3") output += "three ";
          case "4":
            if (stringArray[0] === "4") output += "four ";
          case "5":
            if (stringArray[0] === "5") output += "five ";
          case "6":
            if (stringArray[0] === "6") output += "six ";
          case "7":
            if (stringArray[0] === "7") output += "seven ";
          case "8":
            if (stringArray[0] === "8") output += "eight ";
          case "9":
            if (stringArray[0] === "9") output += "nine ";

            if (stringArray[0] != "0") output += "hundred ";
            break;
        }
      } else if (t === 1) {
        switch (stringArray[t]) {
          case "0":
            if (stringArray[1] === "0") output += "";
          case "1":
            if (stringArray[1] === "1" && stringArray[2] === "0")
              output += "ten ";
            if (stringArray[1] === "1" && stringArray[2] === "1")
              output += "eleven ";

            if (stringArray[1] === "1" && stringArray[2] === "2")
              output += "twelve ";
            if (stringArray[1] === "1" && stringArray[2] === "3")
              output += "thirteen ";
            if (stringArray[1] === "1" && stringArray[2] === "4")
              output += "fourteen ";
            if (stringArray[1] === "1" && stringArray[2] === "5")
              output += "fifteen ";
            if (stringArray[1] === "1" && stringArray[2] === "6")
              output += "sixteen ";
            if (stringArray[1] === "1" && stringArray[2] === "7")
              output += "seventeen ";
            if (stringArray[1] === "1" && stringArray[2] === "8")
              output += "eighteen ";
            if (stringArray[1] === "1" && stringArray[2] === "9")
              output += "nineteen ";
          case "2":
            if (stringArray[1] === "2") output += "twenty ";
          case "3":
            if (stringArray[1] === "3") output += "thirty ";
          case "4":
            if (stringArray[1] === "4") output += "forty ";
          case "5":
            if (stringArray[1] === "5") output += "fifty ";
          case "6":
            if (stringArray[1] === "6") output += "sixty ";
          case "7":
            if (stringArray[1] === "7") output += "seventy ";
          case "8":
            if (stringArray[1] === "8") output += "eighty ";
          case "9":
            if (stringArray[1] === "9") output += "ninety ";
            break;
        }
      } else if (t === 2) {
        switch (stringArray[t]) {
          case "0":
            if (stringArray[2] === "0") output += "";
          case "1":
            if (stringArray[2] === "1" && stringArray[1] != "1")
              output += "one ";
          case "2":
            if (stringArray[2] === "2" && stringArray[1] != "1")
              output += "two ";
          case "3":
            if (stringArray[2] === "3" && stringArray[1] != "1")
              output += "three ";
          case "4":
            if (stringArray[2] === "4" && stringArray[1] != "1")
              output += "four ";
          case "5":
            if (stringArray[2] === "5" && stringArray[1] != "1")
              output += "five ";
          case "6":
            if (stringArray[2] === "6" && stringArray[1] != "1")
              output += "six ";
          case "7":
            if (stringArray[2] === "7" && stringArray[1] != "1")
              output += "seven ";
          case "8":
            if (stringArray[2] === "8" && stringArray[1] != "1")
              output += "eight ";
          case "9":
            if (stringArray[2] === "9" && stringArray[1] != "1")
              output += "nine ";
            break;
        }
      }
    }
    document.getElementById("numberIntoTextOutput").value = output;
  } else if (stringArray.length === 2 && !isNaN(stringNumber)) {
    let output = "";
    for (let r = 0; r < stringArray.length; r++) {
      if (r === 0) {
        switch (stringArray[r]) {
          case "0":
            if (stringArray[0] === "0") output += "";
          case "1":
            if (stringArray[0] === "1" && stringArray[1] === "0")
              output += "ten ";
            if (stringArray[0] === "1" && stringArray[1] === "1")
              output += "eleven";

            if (stringArray[0] === "1" && stringArray[1] === "2")
              output += "twelve.";
            if (stringArray[0] === "1" && stringArray[1] === "3")
              output += "thirteen.";
            if (stringArray[0] === "1" && stringArray[1] === "4")
              output += "fourteen.";
            if (stringArray[0] === "1" && stringArray[1] === "5")
              output += "fifteen.";
            if (stringArray[0] === "1" && stringArray[1] === "6")
              output += "sixteen.";
            if (stringArray[0] === "1" && stringArray[1] === "7")
              output += "seventeen.";
            if (stringArray[0] === "1" && stringArray[1] === "8")
              output += "eighteen.";
            if (stringArray[0] === "1" && stringArray[1] === "9")
              output += "nineteen.";
          case "2":
            if (stringArray[0] === "2") output += "twenty ";
          case "3":
            if (stringArray[0] === "3") output += "thirty ";
          case "4":
            if (stringArray[0] === "4") output += "forty ";
          case "5":
            if (stringArray[0] === "5") output += "fifty ";
          case "6":
            if (stringArray[0] === "6") output += "sixty ";
          case "7":
            if (stringArray[0] === "7") output += "seventy ";
          case "8":
            if (stringArray[0] === "8") output += "eighty ";
          case "9":
            if (stringArray[0] === "9") output += "ninety ";
            break;
        }
      } else if (r === 1) {
        switch (stringArray[r]) {
          case "0":
            if (stringArray[1] === "0") output += "";
          case "1":
            if (stringArray[1] === "1" && stringArray[0] != "1")
              output += "one ";
          case "2":
            if (stringArray[1] === "2" && stringArray[0] != "1")
              output += "two ";
          case "3":
            if (stringArray[1] === "3" && stringArray[0] != "1")
              output += "three ";
          case "4":
            if (stringArray[1] === "4" && stringArray[0] != "1")
              output += "four ";
          case "5":
            if (stringArray[1] === "5" && stringArray[0] != "1")
              output += "five ";
          case "6":
            if (stringArray[1] === "6" && stringArray[0] != "1")
              output += "six ";
          case "7":
            if (stringArray[1] === "7" && stringArray[0] != "1")
              output += "seven ";
          case "8":
            if (stringArray[1] === "8" && stringArray[0] != "1")
              output += "eight ";
          case "9":
            if (stringArray[1] === "9" && stringArray[0] != "1")
              output += "nine ";
            break;
        }
      }
    }
    document.getElementById("numberIntoTextOutput").value = output;
  } else if (stringArray.length === 1 && !isNaN(stringNumber)) {
    let output = "";
    for (let n = 0; n < stringArray.length; n++) {
      if (n === 0) {
        switch (stringArray[n]) {
          case "0":
            if (stringArray[0] === "0") output += "";
          case "1":
            if (stringArray[0] === "1") output += "one ";
          case "2":
            if (stringArray[0] === "2") output += "two ";
          case "3":
            if (stringArray[0] === "3") output += "three ";
          case "4":
            if (stringArray[0] === "4") output += "four ";
          case "5":
            if (stringArray[0] === "5") output += "five ";
          case "6":
            if (stringArray[0] === "6") output += "six ";
          case "7":
            if (stringArray[0] === "7") output += "seven ";
          case "8":
            if (stringArray[0] === "8") output += "eight ";
          case "9":
            if (stringArray[0] === "9") output += "nine ";
            break;
        }
      }
    }
    document.getElementById("numberIntoTextOutput").value = output;
  }
});
