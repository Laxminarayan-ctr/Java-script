// ==========================================
// 1. FOR LOOP - Iterate through an array
// ==========================================

const array = [1, 3, 5, 6, 6];

// i starts from 0
// i < array.length means loop until the end of the array
// array[i] gives the value at the current index
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}


// ==========================================
// 2. FOR...OF LOOP - Get array values directly
// ==========================================

// 'e' represents each value of the array
// First e = 1, then 3, then 5, then 6, then 6
for (const e of array) {
    console.log(e);
}


// ==========================================
// 3. WHILE LOOP
// ==========================================

// Start p with value 1
let p = 1;

// Continue the loop as long as p is less than or equal to 10
while (p <= 10) {
    console.log(p);

    // Increase p by 1 after every iteration
    p++;
}


// ==========================================
// 4. FOR...OF + IF + BREAK
// ==========================================

const browser = ["Chrome", "firefox", "edge"];

// for...of gets the value directly from the array
for (const e of browser) {
    console.log(e);

    // Check if the current browser is Chrome
    if (e == "Chrome") {
        console.log("browser is chrome");

        // break stops the loop immediately
        break;
    }
}


// ==========================================
// 5. FOR...IN LOOP - Object
// ==========================================

const user = {
    name: "laxmi",
    phone: 9456897823,
    email: "laxmi@yopmail.com",
};

// for...in gets the keys/property names of the object
// key will be: name, phone, email
for (const key in user) {

    // user[key] gets the value associated with that key
    console.log(key + "=" + user[key]);
}


// ==========================================
// 6. FOR...IN LOOP - Array
// ==========================================

const br = ["chrome", "firefox", "edge"];

// for...in gives the indexes of the array
// k will be: 0, 1, 2
for (const k in br) {

    // br[k] gets the value at that index
    console.log(br[k]);
}