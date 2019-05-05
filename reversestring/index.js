// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// ----sol 1---
// function reverse(str) {
//     return str
//         .split('')
//         .reverse()
//         .join('');
// }

// -- - sol 2-- -
function reverse(str) {
    let reversed = '';
    // let len = str.length
    // for(let i=0;i<len;i++){
    //     reversed+=str[(len-1)-i];
    // }
    for (let char of str) {
        reversed=char+reversed;
        debugger;
    }
    return reversed;
}

// -- sol 3 --
// function reverse(str) {
//     debugger;
//     return str.split('')
//         .reduce((rev, char) => char + rev, '');
// }

reverse('abcde');

module.exports = reverse;
