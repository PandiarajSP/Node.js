const fs = require("fs");
const a = 100;

// process.nextTick(), Promise.callbacks
// Timer phase -> Poll phase -> Check Phase -> Close phase

// Check phase
setImmediate(() => console.log("setImmediate"));

// Poll phase
fs.readFile("sample.txt", "utf-8", (err, data) => {
    console.log("File Reading CB", data);
});

// Timer phase
setTimeout(() => {
    console.log("Timer expired")
}, 0);

function printA() {
    console.log("a=", a);
}

printA();

console.log("Last line of the file");