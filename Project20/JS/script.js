let yearInput = prompt("Enter the full year you were born");
let convertedYearInput = parseInt(yearInput);
let result = undefined;

if (convertedYearInput !== NaN) {
  result = (convertedYearInput - 4) % 12;

  switch (result) {
    case 0:
      if (result === 0) console.log("Your Chinese Zodiac Sign is: Rat");
      break;
    case 1:
      if (result === 1) console.log("Your Chinese Zodiac Sign is: Ox");
      break;

    case 2:
      if (result === 2) console.log("Your Chinese Zodiac Sign is: Tiger");
      break;

    case 3:
      if (result === 3) console.log("Your Chinese Zodiac Sign is: Rabbit");
      break;

    case 4:
      if (result === 4) console.log("Your Chinese Zodiac Sign is: Dragon");
      break;

    case 5:
      if (result === 5) console.log("Your Chinese Zodiac Sign is: Snake");
      break;

    case 6:
      if (result === 6) console.log("Your Chinese Zodiac Sign is: Horse");
      break;

    case 7:
      if (result === 7) console.log("Your Chinese Zodiac Sign is: Goat");
      break;

    case 8:
      if (result === 8) console.log("Your Chinese Zodiac Sign is: Monkey");
      break;

    case 9:
      if (result === 9) console.log("Your Chinese Zodiac Sign is: Rooster");
      break;

    case 10:
      if (result === 10) console.log("Your Chinese Zodiac Sign is: Dog");
      break;

    case 11:
      if (result === 11) console.log("Your Chinese Zodiac Sign is: Pig");
      break;
    default:
      console.log("A issue has occurred");
  }
}
