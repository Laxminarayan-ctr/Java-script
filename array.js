// ============================================================
// JavaScript Array Methods Practice
// ============================================================


// ============================================================
// 1. PUSH METHOD
// ============================================================
// push() is used to add one or more elements at the END
// of an array.
// It modifies the original array.

const lang = ['java', 'python', 'c++'];

console.log("Push method");

lang.push(10, 20);

console.log(lang);

// Output:
// [ 'java', 'python', 'c++', 10, 20 ]


// ============================================================
// 2. POP METHOD
// ============================================================
// pop() removes the LAST element from an array.
// It modifies the original array.
// It also returns the removed element.

console.log("Pop method");

const numbers = [1, 23, 4, 5, 6];

numbers.pop();

console.log(numbers);

// Output:
// [ 1, 23, 4, 5 ]


// ============================================================
// 3. SHIFT METHOD
// ============================================================
// shift() removes the FIRST element from an array.
// It modifies the original array.
// It returns the removed element.

console.log("Shift method");

const fruits = ['banana', 'apple', 'mango', 'orange'];

const firstFruit = fruits.shift();

console.log(fruits);
console.log(firstFruit);

// Output:
// [ 'apple', 'mango', 'orange' ]
// banana


// ============================================================
// 4. UNSHIFT METHOD
// ============================================================
// unshift() adds one or more elements at the BEGINNING
// of an array.
// It modifies the original array.

console.log("Unshift method");

const colors = ["red", "pink", "orange"];

colors.unshift("blue", "white");

console.log(colors);

// Output:
// [ 'blue', 'white', 'red', 'pink', 'orange' ]


// ============================================================
// 5. SPLICE METHOD
// ============================================================
// splice() is used to ADD, REMOVE, or REPLACE elements
// in an array.
// It modifies the original array.
//
// Syntax:
// array.splice(startIndex, deleteCount, item)
//
// 2 → start from index 2
// 1 → remove 1 element
// 'lion' → add 'lion'

console.log("Splice method");

const animal = ['dog', 'cat', 'elephant', 'tiger'];

animal.splice(2, 1, 'lion');

console.log(animal);

// Output:
// [ 'dog', 'cat', 'lion', 'tiger' ]


// ============================================================
// 6. SLICE METHOD
// ============================================================
// slice() is used to copy/extract a portion of an array.
// It DOES NOT modify the original array.
//
// Syntax:
// array.slice(startIndex, endIndex)
//
// 2 → start from index 2
// 4 → stop before index 4
//
// Index 4 is NOT included.

console.log("Slice method");

const arr = [1, 2, 'ram', 'komal', 6];

const result = arr.slice(2, 4);

console.log(result);

// Output:
// [ 'ram', 'komal' ]


// ============================================================
// 7. CONCAT METHOD
// ============================================================
// concat() is used to combine two or more arrays.
// It does NOT modify the original arrays.
// It returns a NEW array.

console.log("Concat method");

const con = [1, 2, 'laxmi'];
const cal = [3, 1, 4, 'lxmi'];

const value = con.concat(5, 6);
const merge = con.concat(cal);

console.log(merge);
console.log(value);

// merge Output:
// [ 1, 2, 'laxmi', 3, 1, 4, 'lxmi' ]

// value Output:
// [ 1, 2, 'laxmi', 5, 6 ]


// ============================================================
// 8. INCLUDES METHOD
// ============================================================
// includes() checks whether a value exists in an array.
// It returns true or false.
//
// true  → value exists
// false → value does not exist

console.log("Includes method");

const browser = ['chrome', 'firefox', 'edge'];

if (browser.includes('chrome')) {
    console.log('Chrome is available');
}

// Output:
// Chrome is available


// ============================================================
// 9. FOREACH METHOD
// ============================================================
// forEach() executes a function for EVERY element
// in the array.
//
// Here:
// e → current element
//
// forEach() is generally used when you want to perform
// an action on each element, such as printing it.
//
// It does NOT create a new array.

console.log("forEach method");

const num = [2, 3, 4, 5, 6, 7];

num.forEach((e) => {
    console.log(e * 2);
});

// Output:
// 4
// 6
// 8
// 10
// 12
// 14


// ============================================================
// 10. MAP METHOD - String Example
// ============================================================
// map() processes EVERY element of an array and returns
// a NEW array.
//
// Here:
// k → current element
//
// We add "sharma" to every name.
//
// IMPORTANT:
// Whatever we RETURN inside map() becomes an element
// of the new array.

console.log("Map method - String example");

const str = ['laxmi', 'Gaurav', 'Anuj'];

const add = str.map((k) => {
    return k + " " + "sharma";
});

console.log(add);

// Output:
// [ 'laxmi sharma', 'Gaurav sharma', 'Anuj sharma' ]


// ============================================================
// 11. MAP METHOD - Number Example
// ============================================================
// map() can also be used to transform numbers.
//
// Here we add 10 to every number.
//
// ad → current number
// return ad + 10 → new value

console.log("Map method - Number example");

const numm = [10, 20, 30, 40];

const resu = numm.map((ad) => {
    return ad + 10;
});

console.log(resu);

// Output:
// [ 20, 30, 40, 50 ]


// ============================================================
// 12. FOR...IN LOOP WITH ARRAY
// ============================================================
// for...in gives the INDEX of an array.
//
// Index:
// 0 → 10
// 1 → 20
// 2 → 30
// 3 → 40
//
// We use numm[k] to get the actual value.
//
// k → index
// numm[k] → value

console.log("For...in loop");

for (const k in numm) {

    const sum = numm[k] * 10;

    console.log(sum);
}

// Output:
// 100
// 200
// 300
// 400