let typeOfYear = prompt(
    "Type in Dog to convert dog years into human & Human for human years into dog years"
);

convertionDogYearsHumanYears(typeOfYear);

function convertionDogYearsHumanYears(
    typeOfYear,
    dogYears,
    humanYears,
    resultOne,
    resultTwo
) {
    if (typeOfYear === "Human") {
        humanYears = parseInt(
            prompt("How old is your dog? Tells us your dog's age in human years ")
        );
        resultOne = humanYears * 7;
        console.log(`Your dog's age in dog years is ${resultOne}`);
        return resultOne;
    } else if (typeOfYear === "Dog") {
        dogYears = parseInt(prompt("Tell us your dog's age in dog years: "));
        resultTwo = dogYears / 7;
        console.log(`Your dog's age in human years is ${resultTwo}`);
        return resultTwo;
    }

    if (typeOfYear !== "Human" || "Dog") {
        console.log("A Error Has Occurred.");
    }
}