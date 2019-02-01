var inquirer = require ("inquirer");

function Letter (letter, guessed){
    this.letter = letter;
    this.guessed = guessed;
    this.show = function (){
        if (guessed){
        return this.letter}
        else{return _ }
    };
    this.check= function (guess){
        if (this.letter===guess){
            guessed = true
        }
        else {guessed = false}
    };
};

function getLetter(loop){
    inquirer.prompt([{
        name:"letter", 
        question:"Enter a letter: "
    }]).then(function(answers){
        var newLetter = new Letter (answers.letter, true) ;
        loop++;
        getLetter(loop);
    })
}

getLetter()