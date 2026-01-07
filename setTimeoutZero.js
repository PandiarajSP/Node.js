var a = 10;
var b = 20;

console.log("setTimeout function program....");

// Even if its Zero, it will be running once the callstack is empty
// It will be run after the Synchronous operations done
setTimeout(() => {
    console.log("Prints after 0 Seconds");
}, 0)

setTimeout(() => {
    console.log("Prints after 5 Seconds");
}, 5000);

function multiplyFn(a, b) {
    const result = a * b;
    return result;
}

const multiply = multiplyFn(a, b);
console.log("Multiplication Result:", multiply);