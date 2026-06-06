// ❓ DESCRIPTION
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
// Return the average of the given array rounded down to its nearest integer.

// 🔵 TEST
//     assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
//     assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42);
//     assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);

// ✅ SOLUTION
function getAverage(marks){
    let sum = 0;
    for (const mark of marks) {
        sum += mark
    }
    return Math.floor(sum / marks.length)
}