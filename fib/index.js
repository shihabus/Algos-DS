// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

memoize = (fn) => {
    let cache = {};
    return function (...args) {
        if (cache[args]) {
            return cache[args];
        }

        let result = fn.apply(this, args)
        cache[args] = result;
        return result;
    }
}

slowFib = (n) => {
    if (n < 2) {
        return n;
    }
    return fib(n - 1) + fib(n - 2);
}

let fib = memoize(slowFib);


// generic memoize thus ...args
// function memoize(fn) {
//     let cache = {};
//     return function (...args) {
//         // if function already called with the arg
//         if(cache[args]){
//             return cache[args];
//         }

//         // if called for first time
//         // apply is used as we are passing 
//         // array of arguments[DEFENSIVE PROGRAMMING]
//         const result= fn.apply(this,args);
//         cache[args]=result;

//         return result;
//     }
// }

// function slowFib(n) {
//     console.log('Holi');
//     if (n < 2) {
//         return n;
//     }

//     // make sure to call memoized function
//     return fib(n - 1) + fib(n - 2)
// }

// const fib = memoize(slowFib)

// function fib(n) {
//     if (n < 2) {
//         return n
//     }
//     return fib(n - 1) + fib(n - 2)
// }


// function fib(n) {
//     let result=[0,1];
//     for(let i=2;i<=n;i++){
//         let a=result[i-1];
//         let b=result[i-2];
//         result.push(a+b);
//     }
//     return result[n];
// }

// function fib(n) {
//     // a[0]=0
//     // a[1]=1
//     // a[i]=a[i-1]+a[i-2]
//     // return a[n]

//     let a=[];

//     for(let i=0;i<=n;i++){
//         if(i<2){
//             a[i]=i;
//         }else{
//             a[i]=a[i-1]+a[i-2];
//         }
//     }
//     debugger;
//     return a[n]
// }

console.log(fib(4));
module.exports = fib;
