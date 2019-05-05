// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

// have a counter array
// have a array with deleimiter for each level
// if delimiter encountered, 
    // push a new entry to counter with value 0
    // push back delimiter to array
// else
    // add children to array
    // increment last element of counter by 1

function levelWidth(root) {
    // 's' is a delimiter
    let arr=[root,'s'];
    let counters=[0];
    while(arr.length>1){
        let node=arr.shift();
        if(node==='s'){
            // add new element to counter with value 0
            counters.push(0);
            // stick 's' to array end
            arr.push('s')
        }else{
            arr.push(...node.children);
            counters[counters.length-1]++;
        }
    }
    return counters;
}

module.exports = levelWidth;
