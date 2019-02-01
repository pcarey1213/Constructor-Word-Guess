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