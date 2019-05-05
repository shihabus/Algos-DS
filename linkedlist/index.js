// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        // data
        this.data = data;
        // reference to next node
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        // points to last node
        this.head = null;
    }

    // create NEW node with data
    // make NEW node to point current node (this.head)
    // make head to point to the NEW node
    insertFirst(data) {
        // let node = new Node(data, this.head);
        // this.head = node;
        this.head = new Node(data, this.head);
    }

    // return the size
    size() {
        let counter = 0;
        // get current head
        let node = this.head;
        // iterate through the nodes
        while (node) {
            counter++
            node = node.next;
        }
        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        // if no node present
        if (!this.head) {
            return null;
        }

        // if node present
        // last node have next=null
        let node = this.head;

        // while (node) {
        //     if (!node.next) {
        //         return node
        //     }
        //     node = node.next
        // }

        while (node.next) {
            node = node.next
        }
        return node
    }

    // clear linkedlist
    clear() {
        // clear the head
        this.head = null;
    }

    removeFirst() {
        // linkedlist is empty
        if (!this.head) {
            return;
        }

        this.head = this.head.next
    }

    removeLast() {
        // make secondLastNode.next NULL

        // if list is empty
        if (!this.head) {
            return;
        }
        // if single node is present

        // if(!this.head.next){
        //     return this.head=null
        // }

        if (this.size() === 1) {
            return this.head = null
        }

        // let current_node = this.head;
        // while(current_node){
        //     let next_node=current_node.next
        //     if(next_node.next==null){
        //         return current_node.next=null 
        //     }
        //     current_node=current_node.next;
        // }

        let current_node = this.head;
        let next_node = current_node.next;
        while (next_node.next) {
            current_node = next_node;
            next_node = next_node.next;
        }
        current_node.next = null;
    }

    insertLast(data) {
        let newNode = new Node(data);
        // if list is empty, make newNode the head
        // if (!this.head) {
        //     this.head = newNode;
        //     return;
        // }

        let lastNode = this.getLast();
        if (lastNode) {
            // list is not empty
            lastNode.next = newNode;
        } else {
            // list is empty
            this.head = newNode;
        }

        // let currentLastNode=this.head
        // while(currentLastNode.next){
        //     currentLastNode=currentLastNode.next
        // }
        // currentLastNode.next = newNode;

        // let node = this.head;
        // let lastnode = node;
        // while (node.next) {
        //     lastnode = node;
        //     node = node.next
        // }
        // lastnode.next = newNode
    }

    getAt(position) {
        // set a counter
        // loop until last node
        // if position match counter
        // return node

        let counter = 0;
        let node = this.head;

        // list non-empty
        while (node) {
            if (position === counter) {
                return node
            }
            counter++
            node = node.next
        }
        // position more than list length or list is empty
        return null;
    }

    removeAt(index) {
        // edge cases---
        // no nodes
        // first node
        // out of bound, then insert at last

        if (!this.head) {
            return;
        }

        if (index === 0) {
            return this.head = this.head.next
        }

        let len = this.size()
        if (len < index) {
            return;
        }

        let prev_node = this.getAt(index - 1)
        prev_node.next = this.getAt(index + 1)
         
        // remove last node
        // if(!prev_node || ! prev_node.next){
        //     return 
        // }
        // prev_node.next = prev_node.next.next
    }

    insertAt(data,index){
        // edge case
        // empty list

        // get old_previous_next=previous.next
        // make previous.next=newNode
        // newNode.next=old_previous_next

        let newNode=new Node(data);
        if(!this.head){
            this.head= newNode
            return
        }
        
        let len=this.size();

        if(index===0){
            // newNode.next=this.head
            // this.head=newNode
            this.head=new Node(data,this.head)
            return
        }
        
        // let current=this.getAt(index)
        // let previous=this.getAt(index-1)
        // previous.next=newNode
        // newNode.next=current

        let previous=this.getAt(index-1)||this.getLast()
        let node= new Node(data,previous.next)
        previous.next=node
    }

    forEach(fn){
        let node=this.head;
        let counter=0;
        while(node){
            fn(node,counter);
            node=node.next;
            counter++
        }
    }
    
    *[Symbol.iterator](){
        let node=this.head;
        while(node){
            yield node;
            node=node.next;
        }
    }
}

module.exports = {
    Node,
    LinkedList
};
