const fs = require("fs");

console.log("1. start of the Script");

//synchronous (blocking operation)
console.log("2. Reading file Synchronously");
const dataSync = fs.readFileSync("user1.txt", "utf-8");
console.log("3. synchronous read complete!");

//Asynchronous (non-blocking operation)
console.log("4. Reading file Asynchronously");
fs.readFile("user1.txt", "utf-8", (err, dataSync) => {
  if (err) throw err;
  console.log("6.Asynchronous read complete");
});
console.log("5. End of the script");
