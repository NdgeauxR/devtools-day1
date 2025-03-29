// Error 1: Message Mispelled
let message = 'Welcome to the debugging exercise!';
console.log(message); 

// Error 2: No Errors
let button = document.querySelector('.actionButton'); 
button.addEventListener('click', eventHandler); 

// Error 3: Pass the 'event' object to the event handler if you need information about the event later.
function eventHandler() {
  console.log('Button clicked');
  displayOutput();
}

// Error 4: Code works correctly with HTML element with ID output( ID output line 14 of HTML)
function displayOutput() {
  let output = document.querySelector('#output'); 
  output.innerText = 'You clicked the button!';
}

// Error 6:  Removed as 'localMessage' is not accessible outside the function

function updateMessage() {
  let localMessage = 'Updated message';
}
updateMessage();
// console.log(localMessage); // Removed as 'localMessage' is not accessible outside the function

// Error 7: Removed parentheses to pass the function reference
document.getElementById('testButton').addEventListener('click', testFunction); 

function testFunction() {
  console.log('Test function executed');
}

// Error 8:Corrected the operation to addition

let number1 = 10;
let number2 = 5;
console.log('Sum is: ' + (number1 + number2)); 

// Error 9: Removed the invalid property access
let nullVar = null;
console.log(nullVar); 

// Error 10:Corrected variable name to match case
let caseSensitiveVar = 'Case matters';
console.log(caseSensitiveVar); 

// Error 11:Corrected to log the variable instead of a string
let importantData =
  "This string must be logged to the console. It's important!";
console.log(importantData); 

// Error 12: Commented out as the function is not defined
// tryToCallFunction(); 

// Error 13: Corrected property name to match the object definition
let user = { namee: 'Alice' };
console.log(user.namee); 

// Error 14: Removed invalid call on a number.
let someNumber = 123;
console.log(someNumber); 

// Error 15: Added quotation marks to make it a valid string.
let greeting = 'Hello, world!';

// Error 16: removed semicolon after for loop.
for (let i = 0; i < 5; i++) { 
    console.log(i);
}

// Error 17:
let five = '5';
if (five == 5) { // Changed strict equality to loose equality for type coercion
    console.log('Five is equal to 5'); // This one should be logged
} else {
    console.log('Five is not equal to 5'); 
}

// Error 18:Variable declared before using
Array.prototype.push = function() {
    console.log('Array push method is overwritten');
};
let numbers = [];
numbers.push(1);
console.log(numbers);

let x = 5; // 
console.log(x);
x = 5;

// Error 20: removed invalid property access
let myString = 'Hello';
console.log(myString); // Removed invalid property access
console.log(myString.property);
