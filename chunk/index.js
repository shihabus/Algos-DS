// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//     let chunked = [];

//     for (let element of array) {
//         let last = chunked[chunked.length - 1]

//         if (!last || last.length === size) {
//             chunked.push([element])
//         } else {
//             last.push(element)
//         }
//     }
//     return chunked;
// }

// function chunk(array, size) {
//     // find chunk count
//     // for 0 to chunk count
//         // splice array from (0 to size)
//         // push the splice into main array
//     let main = [];
//     let chunkNum = Math.ceil(array.length / size);
//     for (i = 0; i < chunkNum; i++) {
//         main.push(array.splice(0, size));
//     }
//     return main;
// }

function chunk(array, size) {
    // while index < array length
        // slice array from (index to size+index)
        // push the splice into main array
        // index+=size
    const chunked_arr = [];
    let index = 0;
    while (index < array.length) {
        chunked_arr.push(array.slice(index, size + index));
        index += size;
    }
    return chunked_arr;
}

chunk([1, 2, 3, 4, 5, 6, 7, 8], 3)

module.exports = chunk;
