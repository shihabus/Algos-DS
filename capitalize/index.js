// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(string) {
    // capitalize first letter
    // capitalize a letter with a SPACE to its left
    let str=string[0].toUpperCase();
    for(i=1;i<string.length;i++){
        if(string[i-1]===' '){
            str+=string[i].toUpperCase();
        }else{
            str+=string[i];
        }
    }
    return str;
}

// function capitalize(str) {
//     // split into array
//     // for each word capitalize word[0]+word[1..n]
//     // push to an array
//     // return the string from array after join(' ')
//     let result=[]
//     for(let word of str.split(' ')){
//         word=word[0].toUpperCase()+word.slice(1)
//         result.push(word);
//     }
//     return result.join(' ');
// }

module.exports = capitalize;
