// function reverse(word){
// // const wordArray=word.split("") // splitting it into an array in order to do a reverse
// // const reversedArray=wordArray.reverse() 
// // const reversedWord=reversedArray.join("") //joining the reversed array into a string
// return word.split("").reverse().join("") // cleaning up the code to be more shorter
// }


function isPalindrome(word) {
  // Write your algorithm here
  //changing the string to lowercase
  //const newString=word.replace(/[^a-zA-Z0-9]/g,"")
  const reversedWord= word.split("").reverse().join("")

  return (word === reversedWord)
}
/* 
  Add your pseudocode here
  Write a function isPalindrome that will receive one argument, a string. 
  Your function should return true if the string is a palindrome (that is, if it reads the same 
    forwards and backwards, like "mom" or "racecar")  and return false if it is not a palindrome
*/
/*
  Add written explanation of your solution here
 make a function that returns true if a word is palindrome and return false if the word doesn't match the reverse
*/
// wrting test cases
// input=mom  
// reverse = mom 
// return true 
// else false
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

