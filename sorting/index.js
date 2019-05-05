// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    // asc
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                const lesser = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = lesser;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        // hold index of minimum
        let indexOfMin = i;

        for (j = i + 1; j < arr.length; j++) {
            // if a lower value than arr[indexOfMin] found 
            // make j as indexOfMin 
            if (arr[indexOfMin] > arr[j]) {
                indexOfMin = j;
            }
        }

        // swap arr[i] with indexOfMin (current min)
        if (i !== indexOfMin) {
            let lesser = arr[indexOfMin];
            arr[indexOfMin] = arr[i];
            arr[i] = lesser;
        }
    }
    return arr;
}

// split the array into smallest chunks possible
function mergeSort(arr) {
    // array of length 1 is the smallest possible chunk
    if(arr.length===1){
        return arr;
    }

    // find the mid point
    const center=Math.floor(arr.length/2);
    // center not included
    const left=arr.slice(0,center);
    // center to end
    const right=arr.slice(center);

    return merge(mergeSort(left),mergeSort(right));
}

// merge two sorted array into one
function merge(left, right) {
    // left and right are two sorted arrays
    let results = [];
    // until both arrays are non empty
    while (left.length && right.length) {
        // push the smallest element out of two arrays into results
        if (left[0] < right[0]) {
            results.push(left.shift())
        } else {
            results.push(right.shift())
        }
    }

    // if one array become empty, push the non empty into results
    if (left.length) {
        results.push(...left)
    } else {
        results.push(...right)
    }
    return results;

    // return [...results,...left,...right]
}

module.exports = {
    bubbleSort,
    selectionSort,
    mergeSort,
    merge
};
