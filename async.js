// Non-blocking I/O Asynchronous Operations in Node.js
const fs = require("fs");
const https = require("https");

console.log("Starting async operations...");

var a = 10;
var b = 20;

// Blocking (Synchronous) operation - If we are using readFileSync, it will block the event loop. 
// All the following operations will wait until this is completed.
fs.readFileSync("sample.txt", "utf-8", (err, data) => {
    console.log("File data: ", data);
});

// 2
https.get("https://dummyjson.com/products/1", (res) => {
    console.log("Fetched data from URL:", res.statusCode);
});

// 3
setTimeout(() => {
    console.log("Timeout completed after 5 seconds");
}, 5000);

// 1
fs.readFile("sample.txt", "utf-8", (err, data) => {
    console.log("File data: ", data);
})

function multiplyFn(x, y) {
    const result = x * y;
    return result;
}

var c = multiplyFn(a, b);
console.log("Multiplication Result: ", c);
console.log("End of script");