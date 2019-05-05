// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

    insert(data){
        let node=new Node(data);

        // value is greater than current node,
        // move along Right Node
        // value is less than current node,
        // move along Left Node
        if(data>this.data && this.right){
            this.right.insert(data);
        }else if(data>this.data){
            this.right=node;
        }else if(data<this.data && this.left){
            this.left.insert(data);
        }else if(data<this.data){
            this.left=node;
        }
    }

    contains(data){
        // same as root
        if(data===this.data){
            return this;
        }

        if(data<this.data && this.left){
            // less than root
            // search in left
            return this.left.contains(data);
        }else if(data>this.data && this.right){
            // greater than root
            // search in right
            return this.right.contains(data);
        }
        // nothing found
        return null;
    }
}

module.exports = Node;
