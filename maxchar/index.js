// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// function maxChar(str) {
//     // create hashmap  with count
//     // return maxcount
//     let hashMap={}
//     for(let char of str){
//         // if(hashMap.hasOwnProperty(char)){
//         //     hashMap[char]=hashMap[char]+1;
//         // }else{
//         //     hashMap[char]=1;
//         // }

//         // if(hashMap[char]){
//         //     hashMap[char]++
//         // }else{
//         //     hashMap[char]=1
//         // }

//         hashMap[char]=hashMap[char]+1||1;
//     }
//     let tempMax=0;
//     let maxChar=''
//     for(let prop in hashMap){
//         cc=hashMap[prop]
//         tempMax=Math.max(cc,tempMax)
//         if(cc>=tempMax){
//             maxChar=prop
//         }
//     }
//     return maxChar;
// }

function maxChar(str) {
    charMap={};
    for(let char of str){
        if(!charMap[char]){
            charMap[char]=1;
        }else{
            charMap[char]++;
        }
    }
    let max=0,
        maxChar='';
    for(let prop in charMap){
        if(charMap[prop]>max){
            max=charMap[prop];
            maxChar=prop
        }
    }
    return maxChar;
}

module.exports = maxChar;
