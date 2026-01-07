const crypto = require("crypto");

console.log("Starting blocking I/O operations...");

var a = 10;
var b = 20;

// pbkdf2 - password-based key derivation function

// pbkdf2Sync is a CPU-intensive operation
// Blocking operation using pbkdf2Sync - This will block the event loop until the operation is complete.
crypto.pbkdf2Sync("Helloworld", "salt", 5000000, 50, "sha512");
console.log("First key generated");

// Asynchronous operation using pbkdf2 - This is non-blocking and will not block the event loop.
crypto.pbkdf2("Helloworld", "salt", 50000, 50, "sha512", (err, key) => {
    console.log("Second key: ");
})

function multiplyFn(x, y) {
    const result = x * y;
    return result;
}

var c = multiplyFn(a, b);
console.log("Multiplication Result: ", c);
console.log("End of script"); 