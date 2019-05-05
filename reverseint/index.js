// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n){
//     let reversed=n
//     .toString()
//     .split('')
//     .reverse()
//     .join('');
//     return parseInt(reversed)*Math.sign(n);
// }

// function reverseInt(n) {
//     // convert to string
//     // int sign stays
//     // trailing zeroes removed
//     let sign='';
//     let numArr=n.toString().split('');
//     if(Math.sign(n)===-1){
//         sign=numArr.shift();
//     }
//     reversed=sign+numArr.reverse().join('');
//     return parseInt(reversed);
// }

function reverseInt(n) {
    // convert to string
    // int sign stays
    // trailing zeroes removed
    let sign='';
    n=n.toString().split('').reverse();
    if(n.indexOf('-')!==-1){
        sign=n.pop();
    }
    return Number(sign+n.join(''));
}

module.exports = reverseInt;
