// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in JavaScript.
// ---------------------

function max(x, y){
    if (x == y) {
      return "The numbers are even"
    } else if ( x > y ) {
      return x
    } else {
      return y
    }
}

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(x, y, z){
    if (x >= y && x >= z) {
      return x
    } else if (y >= x && y >= z) {
      return y
    } else {
      return z
    }
}

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char){
    var vowels = /[aeiou]/g;
    return vowels.test(char)
}

// ---------------------
// Write a function translate() that will translate a text into "Rovarspraket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------

function rovarspraket(phrase){
    string = ''
    
    for (var i = 0; i < phrase.length; i++) {
    if (isVowel(phrase[i]) == true) {
      string += phrase[i];
    } else {
      string += (phrase[i] + "o" + phrase[i]);
    }
  };
  return string;
};


// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string){
    returnString = []
    for (var i = 0; i < string.length; i++) {
      returnString.unshift(string[i])
    };
    return returnString.join('')
};

















