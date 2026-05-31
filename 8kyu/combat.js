// ❓ DESCRIPTION
// Create a combat function that takes the player's current health and the amount of damage received, and returns the player's new health. Health can't be less than 0.

// 🔵 TEST
//     assertEquals(combat(100, 5), 95);
//     assertEquals(combat(92, 8), 84);
//     assertEquals(combat(20, 30), 0, "Health cannot go below 0");

// ✅ SOLUTION
function combat(health, damage) {
    return health > damage ? health - damage : 0
}