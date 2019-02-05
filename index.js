var inquirer = require ("inquirer");

var word = require("./Word.js")

var words = ["orange", "pineapple", "banana", "mango", "passionfruit", "kiwi", "strawberry"];



function letterPrompt(){

var randWord = words[Math.floor(Math.random() * words.length)];

console.log(randWord)

var chosenWord = new Word (randWord)

console.log(chosenWord);

    for (i=0; i<chosenWord.length;i++){
        
        if(chosenWord.includes("_")){

        inquirer.prompt([{
            name:"letter", 
            question:"Guess the word by entering a letter: "
        }]).then(function(answers){
            var char = answers.letter
            check(char)
            console.log(chosenWord);
        });
        }

        else{
        console.log(chosenWord);
        console.log("You guessed the word!")
        }
    };
};

letterPrompt()
