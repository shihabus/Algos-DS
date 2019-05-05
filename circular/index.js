// --- Directions
// Given a linked list, return true if the list
// is circular, false if it is not.
// --- Examples
//   const l = new List();
//   const a = new Node('a');
//   const b = new Node('b');
//   const c = new Node('c');
//   l.head = a;
//   a.next = b;
//   b.next = c;
//   c.next = b;
//   circular(l) // true

// ----NOT FEASIBLE---
// see if it loop into infinity
// add a visited flag

// have a slow and fast

// if slow and fast become equal at some point of time, 
// then there is a loop

// if next or next.next becomes null 
// that means list is non-circular

function circular(list) {
    let slow = list.head;
    let fast = list.head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
}

module.exports = circular;
