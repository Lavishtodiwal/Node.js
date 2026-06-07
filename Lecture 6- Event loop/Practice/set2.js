console.log("1. Start of script");
// Microtask queue (Promise)
Promise.resolve().then(() => console.log("2. Microtask 1"));
// Timer queue
setTimeout(() => console.log("3. Timer 1"), 0);
// I/O queue
const fs = require("fs");
fs.readFile("user-details.txt", () => console.log("4. I/O operation"));
// Check queue
setImmediate(() => console.log("5. Immediate 1"));
// Close queue
process.on("exit", (code) => {
  console.log("6. Exit event");
});
console.log("7. End of script");


//````````````````working ```````````````````````

// Synchronous Code
// │
// ├── console.log(1)
// ├── Promise.then()  → Microtask Queue
// ├── setTimeout()    → Timers Queue
// ├── fs.readFile()   → Thread Pool
// ├── setImmediate()  → Check Queue
// └── console.log(7)

// Microtasks
// │
// └── Promise.then() → 2

// Event Loop
// │
// ├── Timers Phase
// │     └── 3
// │
// ├── Poll Phase
// │     └── 4
// │
// ├── Check Phase
// │     └── 5
// │
// └── Exit
//       └── 6