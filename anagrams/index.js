// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// --- Sol2
// function charMap(string) {
//     let hashMap = {};
//     for (let char of string) {
//         if(hashMap[char]){
//             hashMap[char]++;
//         }else{
//             hashMap[char]=1;
//         }
//     }
//     return hashMap
// }

// function anagrams(stringA, stringB) {
//     //remove space and non alphabets
//     //convert all to same case
//     // if converted is of diiferent length not an anagram
//     // create charMap
//     // compare each entry with other
//     // if different count return FASLE
//     let strA = stringA.replace(/[^\w]/g, "").toLowerCase();
//     let strB = stringB.replace(/[^\w]/g, "").toLowerCase();
//     if (strA.length !== strB.length) return false
//     let charmapA = charMap(strA);
//     let charmapB = charMap(strB);
//     for (let prop in charmapB) {
//         if (charmapB[prop] !== charmapA[prop]) {
//             return false;
//         }
//     }
//     return true;
// }

// -----Sol 1
// function anagrams(stringA, stringB) {
//     // create array of cleared and same cased string
//     // if lenA !== lenB not anagram
//     // sort each arrays and convert back to string
//     // if sortA !== sortB not an anagram
//     let strA=stringA.replace(/[^\w]/g,"").toLowerCase().split('');
//     let strB=stringB.replace(/[^\w]/g,"").toLowerCase().split('');
//     if(strA.length!==strB.length) return false
//     let sortA=strA.sort().join('');
//     let sortB=strB.sort().join('');
//     if(sortA!==sortB){ return false };
//     return true;
// }

// ---Sol 3
// function buildCharMap(string){
//     let hashMap={}
//     for(let char of string.replace(/[^\w]/g,"").toLowerCase()){
//         hashMap[char]=hashMap[char]+1 || 1;
//     }
//     return hashMap;
// }
// function anagrams(stringA, stringB) {
//     let aCharMap=buildCharMap(stringA);
//     let bCharMap=buildCharMap(stringB);
//     if(Object.keys(aCharMap).length !== Object.keys(bCharMap).length ){
//         return false;
//     }
//     for(let char in aCharMap){
//         if(aCharMap[char]!==bCharMap[char]){
//             return false;
//         }
//     } 
//     return true;
// }

// --- Sol 4

function anagrams(stringA, stringB) {
    let cleanedStringA = cleanString(stringA);
    let cleanedStringB = cleanString(stringB);
    return cleanedStringA === cleanedStringB;
}

function cleanString(string) {
    return string
        .replace(/[^\w]/g, "")
        .toLowerCase()
        .split('')
        .sort()
        .join('')
}

anagrams('RAIL! SAFETY!', 'fairy tales')
module.exports = anagrams;
