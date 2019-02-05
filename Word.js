var letter=require("./Letter.js")

function Word (word, char){
    this.breakupWord = function(word){
        var letters=word.split('');
        console.log(letters)
        for(i=0; i<letters.length;i++){
        var choiceArray = new Letter(letters[i]);
        show(choiceArray[i])
        console.log(choiceArray)
        };
    };
    this.completeWord= function (){
        var choiceString=letterArray.join('')
        console.log(choiceString)
    };
    this.check = function (char) {
        for(i=0; i<letterArray.length;i++){
        guess(char)
        };
    };

};

module.exports = Word;