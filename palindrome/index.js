// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// sol--1
// function palindrome(str) {
//     // reverse
//     let rev = str.split('').reverse().join('')
//     // compare
//     return rev===str;
// }

// DOUBLE COMPARISONS !!
// function palindrome(str) {
//     let len=str.length
//     for(let i=0;i<len;i++){
//         if(str[i]!==str[(len-1)-i]){
//             return false
//         }
//     }
//     return true;
// }

// DOUBLE COMPARISONS SOLVED!!
// function palindrome(str) {
//     let len=str.length
//     if(len%2===0){
//         len=len/2;
//     }else{
//         len=(len/2)-1;
//     }
//     for(let i=0;i<len;i++){
//         if(str[i]!==str[(str.length-1)-i]){
//             return false
//         }
//     }
//     return true;
// }

// sol-- 3
function palindrome(str) {
    return str.split('').every((char,index)=>{
        return char===str[(str.length-1)-index]
    })
}

module.exports = palindrome;
