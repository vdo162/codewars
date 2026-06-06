// ❓ DESCRIPTION
// Given an array of integers your solution should find the smallest integer

// 🔵 TEST
//     assert.strictEqual(findSmallestInt([78,56,232,12,8]),8, `findSmallestInt([78,56,232,12,8])`);
//     assert.strictEqual(findSmallestInt([78,56,232,12,18]),12, `findSmallestInt([78,56,232,12,18])`);
//     assert.strictEqual(findSmallestInt([78,56,232,412,228]),56, `findSmallestInt([78,56,232,412,228])`);
//     assert.strictEqual(findSmallestInt([78,56,232,12,0]),0, `findSmallestInt([78,56,232,12,0])`);
//     assert.strictEqual(findSmallestInt([1,56,232,12,8]),1, `findSmallestInt([1,56,232,12,8])`);

// ✅ SOLUTION
function findSmallestInt(arr) {
    let smallestInt = arr[0]
    for (const arrElement of arr) {
        if(smallestInt > arrElement) {
            smallestInt = arrElement
        }
    }
    return smallestInt;
}