// Exercise 1:
// Using this array:

// let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
// Remove Banana from the array.
// Sort the array in alphabetical order.
//     Add “Kiwi” to the end of the array.
//         Remove “Apples” from the array.Don’t use the same method as in part 1.
// Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’]becomes[‘b’, ‘c’, ‘a’])
// At the end you should see this outcome:
// ["Kiwi", "Oranges", "Blueberries"]

let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

console.log('Initial array:' + fruits)

console.log('removing...: ' + fruits.shift()); // removes "Banana" - shift() return the removed item.

console.log('now fruits is: ' + fruits); 

console.log('sorting...: ' + fruits.sort()); // sort() returns the sorted array

fruits.push("Kiwi"); // careful, push() doesn't returnt the object changed but returns its new length!

console.log("added Kiwi to the end...: " + fruits);

console.log("Splicing: "+ fruits.splice(0,1));

console.log("Removed Apple...:" + fruits);

console.log("reversing fruits we get: " + fruits.reverse()); // reverse() returns the reversed array

// Exercise 2:
// Using this array:
// let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// Access and then console.log “Oranges”.

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
console.log(moreFruits[1][1][0]);

// three-dimensional Array. moreFruits[1] = ["Apples,["Oranges"], "Blueberries]" which is also an Array
// so moreFruits[1][1] = ["Oranges"] which is still an Array
// moreFruits[1][1][0] gives finally access to "Oranges"


