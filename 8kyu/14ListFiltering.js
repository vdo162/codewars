// ❓ DESCRIPTION
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// 🔵 TEST
//     assert.deepEqual(filter_list([1,2,'a','b']),[1,2], 'For input [1,2,"a","b"]');
//     assert.deepEqual(filter_list([1,'a','b',0,15]),[1,0,15], 'For input [1,"a","b",0,15]');
//     assert.deepEqual(filter_list([1,2,'aasf','1','123',123]),[1,2,123], 'For input [1,2,"aasf","1","123",123]');

// ✅ SOLUTION
function filter_list(l) {
    const newList = []
    for (const element of l) {
        if (typeof element === 'number') newList.push(element)
    }
    return newList
}