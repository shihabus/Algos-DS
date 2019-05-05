// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    // convert to lowercase
    // find vowels
    // return count

    let matches= str.match(/[aeiou]/gi)
    let len=matches?matches.length : 0;
    return len;
    
}

// function vowels(str) {
//     // convert to lowercase
//     // iterate through string
//     // compare with vowels
//     // if found increase the count
//     // return count
//     let checker=['a','e','i','o','u'];
//     let count=0;
//     for(let char of str.toLowerCase()){
//         if(checker.includes(char)){
//             count++;
//         }
//     }
//     return count;
// }

module.exports = vowels;
