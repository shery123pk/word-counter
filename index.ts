#! /usr/bin/env node

import inquirer from "inquirer";

let answer=await inquirer.prompt(
    [
        { message:"Enter any sentence",
            name:"sentence",
            type:'string'

        }
]
)

let word=answer.sentence.trim().split(" ");             // trim() remove white space and split collect word into array
console.log(word)
console.log(`your word count is ${word.length}`);       //this code count word length








