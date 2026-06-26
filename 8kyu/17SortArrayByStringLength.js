// ❓ DESCRIPTION
// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// 🔵 TEST
//   it("Test 1",function(){
//     Test.assertDeepEquals(sortByLength(["Beg", "Life", "I", "To"]),["I", "To", "Beg", "Life"]);
//   });
//   it("Test 2",function(){
//     Test.assertDeepEquals(sortByLength(["", "Moderately", "Brains", "Pizza"]),["", "Pizza", "Brains", "Moderately"]);
//   });
//   it("Test 3",function(){
//     Test.assertDeepEquals(sortByLength(["Longer", "Longest", "Short"]),["Short", "Longer", "Longest"]);
//   });

// ✅ SOLUTION
function sortByLength(array) {
    // Return an array containing the same strings,
    // ordered from shortest to longest
    return [...array].sort((s1, s2) => s1.length - s2.length)
}

console.log(sortByLength(["Beg", "Life", "I", "To"]))