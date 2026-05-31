// ❓ DESCRIPTION
// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

// 🔵 TEST
//     assertEquals(makeNegative(42), -42);

// ✅ SOLUTION
function makeNegative(num) {
    return num > 0 ? -num : num
}