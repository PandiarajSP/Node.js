const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("Timer expired"), 0);

Promise.resolve("promise").then(() => console.log("Promise"));

fs.readFile("sample.txt", "utf-8", () => {
    setTimeout(() => console.log("2nd Timer"), 0);

    process.nextTick(() => console.log("2nd nextTick"));

    setImmediate(() => console.log("2nd setImmediate"));

    console.log("File Reading CB");
});
process.nextTick(() => console.log("nextTick"));

console.log("End of the file");
