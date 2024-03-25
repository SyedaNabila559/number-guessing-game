#!/usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to code with nabila - cli number guessing game");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessdNumber",
        type: "number",
        message: "Enter your guess (number limit from 1 to 10)",
    },
]);
if (answer.userGuessdNumber === randomNumber) {
    console.log("Congratulation! you guess a correct number");
}
else {
    console.log("Sorry! you gusse a wrong number");
}
