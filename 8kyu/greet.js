/*
❓
Create a function that accepts a parameter representing a name and returns the message: "Hello, <name> how are you doing today?"

✅
assert.strictEqual(greet("Ryan"), "Hello, Ryan how are you doing today?");
assert.strictEqual(greet("Shingles"), "Hello, Shingles how are you doing today?");
*/

function greet(name){
    return `Hello, ${name}! How are you doing today?`;
}

console.log(greet('Bill'))