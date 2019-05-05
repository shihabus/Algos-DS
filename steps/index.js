// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
    // if row===n STOP
    // if stair.length(column.length)===n PRINT stair and MOVE to NEXT row
    // if stair.length<row add '#' to stair
    // else add ' ' to stair

    // base case
    if (n === row) {
        return;
    }
    // move to new line
    if (stair.length === n) {
        console.log(stair)
        steps(n, row + 1)
        return
    }
    // add next char to stair
    if (stair.length <= row) {
        stair += '#'
    } else {
        stair += ' '
    }

    steps(n, row, stair)
}

// function steps(n) {
//     // for i=1 ... n
//     //     print i:# and (n-i):_
//     let hash = '#',
//         space = ' ',
//         stair='';
//     for(let i=1;i<=n;i++){
//         stair=hash.repeat(i)+space.repeat(n-i);
//         console.log(stair.toString());
//     }
// }

// function steps(n) {
//     //  double loop approach
//     //  for i=1 ... n
//     //         stair=''
//     //      for i=1 ... n
//     //             i<=j stair+=#
//     //             else stair+=' '
//     //         print stair

//     for(let i=1;i<=n;i++){
//         stair=''
//         for(let j=1;j<=n;j++){
//             if(j<=i){
//                 stair+='#'
//             }else{
//                 stair+=' '
//             }
//         }
//         console.log(stair.toString());
//     }
// }

module.exports = steps;
