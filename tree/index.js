// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
    constructor(data) {
        this.data = data;
        this.children = [];
    }

    add(data) {
        const node = new Node(data);
        this.children.push(node);
    }

    remove(data) {
        // filter helper return a new array 
        // with all the condition returned true
        // so here to delete we return false 
        // for the special case to be removed
        this.children = this.children.filter(node => {
            return node.data !== data
        })
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    traverseBF(fn) {
        debugger;
        let arr = [this.root],temp=[];
        // while (arr.length) {
        //     const node = arr.shift();

        //     for(let child of node.children){
        //         arr.push(child)
        //     }

        //     // arr.push(...node.children)
        //     fn(node);
        // }

        for(let node of arr){
            for(let child of node.children){
                debugger;
                arr.push(child)
            }
            fn(node)
            // arr.push(...node.children)
        }
    }

    traverseDF(fn){
        let arr=[this.root];
        while(arr.length){
            let node=arr.shift()
            arr.unshift(...node.children)
            fn(node);
        }
    }
}

module.exports = {
    Tree,
    Node
};
