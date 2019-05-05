// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//     // find column count
//     // find # and ' ' positional range for each row
//         // # @ column >=(midpoint-row) & column <= (midpoint+row)
//         // ' ' @ all other positions
//     let midpoint=Math.floor((2*n-1)/2);
//     for(let row=0;row<n;row++){
//         let level='';
//         for(let column=0;column<(n*2)-1;column++){
//             if(column >= (midpoint-row) && column <= (midpoint+row)){
//                 level+='#'
//             }else{
//                 level+=' '
//             }
//         }
//         console.log(level)
//     }
// }

function pyramid(n, row = 0, level = '') {
    if (row === n) {
        return;
    }

    let columnLenght = 2 * n - 1;
    if (level.length === columnLenght) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    let midpoint = Math.floor((2 * n - 1) / 2);
    let add=''
    if (level.length >= (midpoint - row) && level.length <= (midpoint + row)) {
        add= '#';
    } else {
        add = ' ';
    }

    pyramid(n, row, level+add);
}

pyramid(3)

module.exports = pyramid;
