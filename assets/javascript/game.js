/**Array of 40 words */
var words = ["Eddard", "Robert", "Jaime", "Catelyn", "Cersei", "Daenerys", "Jorah", "Viserys", "Jon", "Sansa", "Arya", "Robb", "Theon", "Brandon", "Joffery", "The Hound", "Tyrion", "Khal", "Littlefinger", "Davos", "Samwell", "Stannis", "Melisandre", "Bronn", "Varys", "Margaery", "Tywin", "Ygritte", "Gendry", "Tormund", "Brienne", "Ramsey", "Gilly", "Daario", "Missandei", "Ellaria", "Tommen", "Roose", "The High Sparrow", "Grey Worm"];
 console.log(words);

 /** Random Word selection */
var word = words[Math.floor(Math.random() * words.length)];
console.log(word);

/**Answer Array using Underscores with For Loop */
var answerArray = [];
for (var i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
console.log(answerArray);

/** ************* Winter is HERE!!!! ************** */

/** Letters guessed */
// alert(answerArray.join(" "));
// console.log(answerArray.join);

/** Correct Guess */

/**Events */
document.onkeyup = function(event) {
    var guess = event.key
console.log(guess)
}

