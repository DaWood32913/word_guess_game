/**Array of 40 words */
var words = ["eddard", "robert", "jaime", "catelyn", "cersei", "daenerys", "jorah", "viserys", "jon", "sansa", "arya", "robb", "theon", "brandon", "joffery", "the hound", "tyrion", "khal", "littlefinger", "davos", "samwell", "stannis", "melisandre", "bronn", "varys", "margaery", "tywin", "ygritte", "gendry", "tormund", "brienne", "ramsey", "gilly", "daario", "missandei", "ellaria", "tommen", "roose", "the high sparrow", "grey worm"];
 console.log(words);

 /** Random Word selection */
var word = words[Math.floor(Math.random() * words.length)];
console.log(word);

/**Answer Array using Underscores with For Loop */
// var answerArray = [];
// for (var i = 0; i < word.length; i++) {
//     // showLetters.id = 'words';
//     answerArray[i] = "_";

// }
// console.log(answerArray);

/** ************* Winter is HERE!!!! ************** */
//Variables;
var wins = 0;
var loss = 0;
var wrongLetter = [];
var guessesLeft = 9;
var userGuesses = [];
var counter;
var space;


/** Elements */

var showImages = document.getElementById("characters");
var showLetters = document.getElementById("names");
var showGuessed = document.getElementById("letterGuessed");
var showWins = document.getElementById("wins");
var showLosses = document.getElementById("losses");

/**Start Game */

/** Letters guessed */
result = function (){
showLetters = document.getElementById("names");
correct = document.createElement("ul");

var answerArray = [];
for (var i = 0; i < word.length; i++) {
    correct.setAttribute('id', 'my-word');
    userGuesses = document.createElement('li');
    userGuesses.setAttribute('class', 'letterGuessed');
    showLetters.id = 'names';
    answerArray[i] = "_";
    if (word[i] === "_"){
        userGuesses.innerHTML = "_";
        space = 1;
    } else {
        userGuesses.innerHTML ="_";
    }

    words.push(userGuesses);
    showLetters.appendChild(correct);
    correct.appendChild(userGuesses);

}
console.log(answerArray);

/** Remaining Guess */

comments = function ()  {
    showGuessed.innerHTML = "You have" + guessesLeft + "remaining";
    if (guessesLeft < 1) {
        showGuessed.innerHTML = "You Lose!";
    }
    for (var i =0; i < words.length; i++) {
        if (counter + space === words.length) {
            showGuessed.innerHTML = "You Win!"
        }
    }
}

/**Events */
document.onkeyup = function(event) {
    var userGuesses = event.key;
    userGuesses.setAttribute("class", "active");
    userGuesses.onkeyup = null;
    for (var i = 0; i < words.length; i++){
        if (words[i] === showGuessed) {
            userGuesses[i].innerHTML = guessesLeft;
            counter += 1;
        }
    }
    var x = (words.indexOf(showGuessed));
    if (j === -1) {
        guessesLeft-= 1;
    }

} }
