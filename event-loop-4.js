const fs = require("fs");

setImmediate(() => console.log("setImmediate"));

setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve("prmoise").then(() => console.log("Prmoise"));

fs.readFile("sample.txt", "utf-8", () => {
    console.log("File reading CB");
})

process.nextTick(() => {
    process.nextTick(() => console.log("inner nextTick"))
    console.log("nextTick");
});

console.log("End of the file");