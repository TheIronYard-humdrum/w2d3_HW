// ---------------------------
// The Arrays You Will Work With
// ---------------------------
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];



// ---------------------------
// 1. Find largest number
// ---------------------------

var largestNumber = function(numbers) {
  return Math.max(...numbers);
}
largestNumber(numbers)



// ---------------------------
// 2. Find longest string
// ---------------------------
var longestString = function(strings) {
  longestWord = ""
  for (var i = 0; i < strings.length; i++) {
    if (strings[i].length > longestWord.length) {
      longestWord = strings[i]
    }
  }
  return longestWord
}
longestString(strings)


// ---------------------------
// 3. Find even numbers
// ---------------------------

var evenNumbers = function(numbers) {
  even = []
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i]%2 == 0) {
      even.push(numbers[i])
    }
  }
  return even
}
evenNumbers(numbers)
// ---------------------------
// 4. Find odd numbers
// ---------------------------

var oddNumbers = function(numbers) {
  odd = []
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i]%2 != 0) {
      odd.push(numbers[i])
    }
  }
  return odd
}
oddNumbers(numbers)

// ---------------------------
// 5. Find words that contain `is`
// ---------------------------

var containsIs = function(strings, phrase) {
  contains = []
  for (var i = 0; i < strings.length; i++) {
    if (strings[i].includes(phrase)) {
      contains.push(strings[i])
    }
  }
  return contains
}
containsIs(strings, "is")

// ---------------------------
// 5. Join Both Arrays Together
// ---------------------------

var join = function(arrayOne, arrayTwo) {
  return arrayOne.concat(arrayTwo)
}


// ---------------------------
// 6. Use the Instructors array and find all that teach JavaScript, 
//    then sort them alphabetically
// ---------------------------

var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Joe', teaches : 'iOS'},
    { firstname : 'Jake', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];

var JavaScriptInstructors = function(instructors) {
  javaScriptTeachers = []
  for (var i = 0; i < instructors.length; i++) {
    if (instructors[i].teaches == "JavaScript") {
      javaScriptTeachers.push(instructors[i].firstname)
    }
  }
  javaScriptTeachers = javaScriptTeachers.sort()
  return javaScriptTeachers
};













