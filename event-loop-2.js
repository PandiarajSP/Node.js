const fs = require("fs");

const a = 100;

// Check phase
setImmediate(() => console.log("setImmedidate"));

// After process.nextTick phase
Promise.resolve("Promise").then(() => console.log("Promise"));

// Poll phase
fs.readFile("sample.txt", "utf-8", () => {
    console.log("File read CB");
})

// Timer phase
setTimeout(() => console.log("Timer expired"), 0);

// process.nextTick() phase
process.nextTick(() => console.log("Process nextTick"));

function functionA() {
    console.log("a=", a);
}

functionA();

console.log("End of the file");