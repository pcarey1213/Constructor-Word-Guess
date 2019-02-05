var underscore = "_";

var guessed = false;

function Letter (letter, guessed){
    this.letter = letter;
    this.guessed = false;
    this.show = function (){
        if (guessed){
        return letter}
        else{return underscore }
    };
    this.guess = function (char) {
        console.log(char)
        if (letter===char){
        guessed=true;
        console.log(guessed);
        }
    };
};

var input = new Letter ("a", guessed)

console.log(input)

input.guess("b")


//module.exports=Letter;
