// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
    // Stack Head: to store elements in order of insert
    // Stack Tail: to store elements in reverse order of insert
    // Peek/Deque
        // Till Tail is empty
        // Head.push(Tail.pop)
        // return Head.pop()/Head.peek()
        // refill Head
    // Add
        // Tail.push(record)
    constructor(){
        this.Tail=new Stack();
        this.Head=new Stack();
    }
    
    add(record){
        this.Tail.push(record)
    }

    remove(){
        while(this.Tail.peek()){
            this.Head.push(this.Tail.pop())
        }
        let popped= this.Head.pop()
        while(this.Head.peek()){
            this.Tail.push(this.Head.pop())
        }
        return popped;
    }
    
    peek(){
        while(this.Tail.peek()){
            this.Head.push(this.Tail.pop())
        }
        let peeked= this.Head.peek()
        while(this.Head.peek()){
            this.Tail.push(this.Head.pop())
        }
        return peeked;
    }

}

module.exports = Queue;
