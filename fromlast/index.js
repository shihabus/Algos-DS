// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

// the element after 
// n positions of nth node will be the last element

// create a template with n element width
// move the template till end
// the element at the start of template 
// will be n elements a head of last element

// have slow and fast both pointing to head
// let fast jump over n elements
// for each iteration move slow and fast per one element
// if fast reaches the last element
    // then slow points at the nth element from last
function fromLast(list, n) {
    let slow=list.head;
    let fast=list.head;

    // create n element displacement between slow and fast
    // let counter=0;
    // while(counter<n){
    //     fast=fast.next;
    //     counter++;
    // }
    while(n>0){
        fast=fast.next;
        n--;
    }
    // iterate till last node
    while(fast.next){
        slow=slow.next;
        fast=fast.next;
    }
    return slow;
}

module.exports = fromLast;
