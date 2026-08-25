var name = 'John Doe';

function greet() {
    var name = 'laxmi';
    console.log(name);

}
greet(); // Output: laxmi

console.log(name); // Output: John Doe


var greeting = 'Hello, World!';

var t =4;

if(t > 3) {
   var greeting = 'Hello, Universe!';
    console.log(greeting); // Output: Hello, Universe!
}


let dis = 'mathura';
dis = 'agra';
console.log(dis); // Output: agra

const state = 'California';
// state = 'Texas'; // This will throw an error because 'state' has been declared with 'const'
console.log(state); // Output: California

var k;
console.log(k); // Output: undefined

let m;
console.log(m);

//const n;
console.log(n); // This will throw an error because 'const' variables must be initialized at the time of declaration    

const age = (age)=>{

    if(age < 18) {
        console.log('You are a minor');
    }
    else {
        console.log('You are an adult');
    }
}
age();
