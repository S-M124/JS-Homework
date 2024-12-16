let studentsFirstNameArray = [];
let studentsLastNameArray = [];

let amountStudents = parseInt(prompt("Enter The Amount Of Students"));

for (let i = 0; i <= amountStudents; i++) {
    studentsFirstNameArray[i] = prompt("Enter The Name Of The Student");
    studentsLastNameArray[i] = prompt("Enter The Students Last Name");
    console.log(
        `${i}. \n ${studentsFirstNameArray[i]} ${studentsLastNameArray[i]}`
    );
}