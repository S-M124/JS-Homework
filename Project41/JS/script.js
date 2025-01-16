let lettersArray = "abcdefghijklmnopqrstuvwxyz".split("");
let removedLettersArrayChecker = "abcdegjklmopruvwxyz".split("");
let word = "qinshift";
let button = document.getElementById("submitButton");
let letter1 = document.getElementById("letter1");
let letter2 = document.getElementById("letter2");
let letter3 = document.getElementById("letter3");
let letter4 = document.getElementById("letter4");
let letter5 = document.getElementById("letter5");
let letter6 = document.getElementById("letter6");
let letter7 = document.getElementById("letter7");
let letter8 = document.getElementById("letter8");
let hangman = document.getElementById("hangman");
let incorrectGuesses = 1;
let maxIncorrectGuesses = 6;

enteredWordChecker = function (
  inputAnswer,
  word,
  letter1,
  letter2,
  letter3,
  letter4,
  letter5,
  letter6,
  letter7,
  letter8
) {
  if (inputAnswer === word) {
    letter1.src = "../images/qletter.jpg";
    letter1.style.height = "50px";
    letter2.src = "../images/Iletter.jpg";
    letter2.style.height = "50px";
    letter6.src = "../images/Iletter.jpg";
    letter6.style.height = "50px";
    letter3.src = "../images/nletter.jpg";
    letter3.style.height = "50px";
    letter4.src = "../images/sletter.jpg";
    letter4.style.height = "50px";
    letter5.src = "../images/hletter.jpg";
    letter5.style.height = "50px";
    letter7.src = "../images/Fletter.jpg";
    letter7.style.height = "50px";
    letter8.src = "../images/Tletter.jpg";
    letter8.style.height = "50px";
    alert("You Win!");
  }
};

enteredLetterChecker = function (
  inputAnswer,
  letter1,
  letter2,
  letter3,
  letter4,
  letter5,
  letter6,
  letter7,
  letter8
) {
  if (inputAnswer === "q") {
    letter1.src = "../images/qletter.jpg";
    letter1.style.height = "50px";
  }
  if (inputAnswer === "i") {
    letter2.src = "../images/Iletter.jpg";
    letter2.style.height = "50px";
    letter6.src = "../images/Iletter.jpg";
    letter6.style.height = "50px";
  }

  if (inputAnswer === "n") {
    letter3.src = "../images/nletter.jpg";
    letter3.style.height = "50px";
  }

  if (inputAnswer === "s") {
    letter4.src = "../images/sletter.jpg";
    letter4.style.height = "50px";
  }
  if (inputAnswer === "h") {
    letter5.src = "../images/hletter.jpg";
    letter5.style.height = "50px";
  }

  if (inputAnswer === "f") {
    letter7.src = "../images/Fletter.jpg";
    letter7.style.height = "50px";
  }

  if (inputAnswer === "t") {
    letter8.src = "../images/Tletter.jpg";
    letter8.style.height = "50px";
  }
};

const ifNotLetter = function () {
  incorrectGuesses++;
  if (incorrectGuesses > maxIncorrectGuesses) {
    alert("You Lose");
    return (hangman.src = `../images/sixthstage-gameover.png`);
  } else {
    return (hangman.src = `../images/${incorrectGuesses}stage.png`);
  }

  // The function ifNotLetter is the only part where AI was used. As I thought something was wrong with my function because it kept producing 2 submits but I had a missing stage of the hangman so it just gave me the same function refurbished & taught me about being able to put ${} in a src tag which I didn't know was possible or plausible in this kind of a form.
};
button.addEventListener("click", function () {
  inputAnswer = document.getElementById("inputedAnswer").value.toLowerCase();
  for (let i = 0; i < lettersArray.length; i++) {
    if (inputAnswer === lettersArray[i]) {
      enteredLetterChecker(
        inputAnswer,
        letter1,
        letter2,
        letter3,
        letter4,
        letter5,
        letter6,
        letter7,
        letter8,
        hangman
      );
    }
  }
  if (inputAnswer === word) {
    enteredWordChecker(
      inputAnswer,
      word,
      letter1,
      letter2,
      letter3,
      letter4,
      letter5,
      letter6,
      letter7,
      letter8
    );
  } else if ((inputAnswer = removedLettersArrayChecker.slice().forEach)) ifNotLetter(hangman);
});

// Not entirely sure how .slice works from what I understand it if undefined it slices the first index & since the end is undefined as well it starts at 0 & ends at the last index of the array because of the forEach tag after it, it continues till the end of the array checking each letter.
