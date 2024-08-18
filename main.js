import inquirer from 'inquirer';
const answer = await inquirer.prompt([
    {
        message: "Enter first number",
        type: "number",
        name: "firstNumber"
    },
    {
        message: "Enter second number",
        type: "number",
        name: "secondNumber"
    },
    {
        message: "Select one operator",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"]
    },
]);
switch (answer.operator) {
    case "addition":
        console.log(answer.firstNumber + answer.secondNumber);
        break;
    case "subtraction":
        console.log(answer.firstNumber - answer.secondNumber);
        break;
    case "multiplication":
        console.log(answer.firstNumber * answer.secondNumber);
        break;
    case "division":
        if (answer.secondNumber !== 0) {
            console.log(answer.firstNumber / answer.secondNumber);
        }
        else {
            console.log("Cannot divide by zero");
        }
        break;
    default:
        console.log("Invalid operator");
}
