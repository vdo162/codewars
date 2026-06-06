// ❓ DESCRIPTION
// Complete the solution so that it reverses the string passed into it.

// 🔵 TEST
//     assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
//     assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
//     assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);

// ✅ SOLUTION
function solution(str){
    let reversedString = ''
    for (let i = 0; i < str.length; i++) {
        reversedString += str[str.length - 1 - i]
    }
    return reversedString
}