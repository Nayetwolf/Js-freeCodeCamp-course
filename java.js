//---Lean JavaScript - Full Course for beginners-----//
// This complete 134-part JavaScript tutorial for beginners will teach you everything you need to know to get started with the JavaScript programming language!
//========Brought to you by freeCodeCamp=========//
//=====Noted down by Ilyas Filali=========//

// Data Types:
// undefined, null, Boolean, String, Symbol, Number, and Object

var myName = "Beau";

myName = 8;

let ourName = "freeCodeCamp";

const pi = 3.14;

var a;
var b = 2; // Declaring and assigning variable
console.log(a) //you can check what variables are in various times in your program!

a = 7; // a already declared 
b = a; //assing the content of a to b


console.log(a) //allows you to see things in the console


var a = 9; 

// Initialize these three variables

var a = 5;
var b = 10;
var c = "Iam a";

// Do not change Code below this line 

a = a + 1;  // = 6
b = b + 5;  // = 15
c = c + "String!"; // = Iam a String!

 /* CASE SENSITIVITY IN VARIABLES */

// Declarations

var studlyCapVar;  //  [StUdLyCapVaR] WRONG!  
var properCamelCase;  //  [RIGHT!]
var titleCaseOver; //  [TitleCaseOver] WRONG!

// Assignments 

studlyCapVar = 10; // [STUDLYCAPVAR] WRONG!
properCamelCase = "A String"; //[PRoperCAmelCAse]
titleCaseOver = 9000; // [tITLEcASEoVER] WRONG!

 /* Basic Math */
// Adding Numbers :
var sum = 10 + 10; //we use the + operator
console.log(sum)
// Substracting Numbers :
var difference = 45 - 33; // we the - operator
console.log(difference)
// Multiplying Numbers :
var product = 8 * 0;  // we the * operator
console.log(product)
// Dividing Numbers :
var quotient = 66 / 33;  // we the / operator
console.log(quotient)

 /* Incrementing Numbers*/ // (which means to add a numbger to it)
var myVar = 87;
// Only change code below this line
myVar = myVar + 1; //==> A QUICKER WAY to INCREMENT IS TO USE myVar++;
 /* Decrementing Numbers*/ // (which means to substract a number using -- )
var myVar = 11;
// Only change code below this line
myVar = myVar - 1; //==> A QUICKER WAY to INCREMENT IS TO USE myVar--;

 /* Decimal Numbers */

 var ourDecimal = 5.7;

// Only change code below this line
var ourDecimal = 0.999; // Anything that has additional poit to it is a Decimal 

 /* Multiply Decimals */
var product = 2.0 * 2.5;
console.log(product)

/* Divide Decimals */
var quotient = 4.4 / 2.0;

/* Finding a Remainder */
var Remainder;
remainder  = 11 % 3;

/* Augmented Math Operations */
/* Compound Assignment with Augmented Addition */
var a = 3;
var b = 17;
var c = 12;

// Only Modify code below this line

a = a + 12;// Easier way to do is as a += 12;
b = 9 + b;// Easier way to do is as b += 9;
c = c + 7;// Easier way to do is as c += 7;

/* Compound Assignment with Augmented Substruction */
// Same with the code above with change the (+=) with (-=)
/* Compound Assignment with Augmented Multiplication */
// Same with what have been mentioned above we change the operators with (*=) Instead 
/* Compound Assignment with Augmented Division */
// Same with what have been mentioned above we change the operators with (/=) Instead 


/* Declare String Variables */
// Example 
var firstName = "Alan";
var lastName = "Turing";

// Only change code below this line 
var myFirstName = "Beau";
var myLastName = "Filali";

/* Escaping Literal Quotes */
var myStr = "I am a \"double quoted\" string inside \"double quotes\" "; // we use an escape -character[\\]- to escape a quote 
console.log(myStr)

// TIP : you can use back ticks (``) to wrap the whole quotes from outside 
//Example :
var myStr = `'<a href="http://www.example.com" target="_blank">Link</a>'`;  

/* Escaping Sequences */
/****
CODE OUTPUT
\' single quote
\" double quote
\\ backslash  (So javaScript knows that you are not trying to escape another backslash character)
\n newline
\r carriage return
\t tab
\b backspace
\f form feed
***/

var myStr = "FirstLine\n\t\\SecondLine\nThirdeLine"
console.log(myStr)

/*==================================================*/

/* Concatenating Strings with Plus Operator */  
// Example 
var ourStr = "I come first. " + "I come Second."; // the space at the end of the first string before the quote is for to have a space between the two sentence!
// Another Example 
var myStr = "This is the start. " + "This is the end."
console.log(myStr);

/* Concatenating Strings with Plus Equals Operator */
// Example
var ourStr = "I come first. ";
ourStr += "I come second."; // += just like using numbers
// Another Example
var myStr = "This is the first sentence. "
myStr += "This is the second sentence."
console.log(myStr); // "This is the first sentence. This is the second sentence."

/* Constructing Strings with Variables */
// Example
var ourName = "freeCodeCamp";
var ourStr = "Hello, our name is " + ourName + ", how are you?"; //We can concatenate using variables

// Another Example 
var myName = "Ilyas"
var mystr = "My name is " + myName + " and I am well!";
console.log(myStr) // = "My name is Ilyas and I am well! "
/* Appending Variables to Strings */
// Example
var anAdjective = "awesome!";
var ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
console.log(ourStr) // freeCodeCamp is awesome!
// Another Example
var someAdjective = "worthwhile";
var myStr = "Learning to code is ";
myStr += someAdjective
console.log(myStr) // Learning to code is worthwile

/* Find Length of a String */
// Example 
var firstNameLength = 0;
var firstName = "Ada";

firstNameLength = firstName.length;
console.log(firstNameLength)

// Another Example
var lastNameLength = 0;
var lastName = "Lovelace";

lastNameLength = lastName.length;
console.log(lastNameLength) // = 8

/* Bracket Notation to Find First Character in String */
// Example
var firstLetterOfFirstName = "";
var firstName = "Ada"; // A IS 0 // D IS 1 // a is 2

firstLetterOfFirstName = firstName[0]; // = A

// Another Example
var firstLetterOfFirstName = "";
var lastName = "Lovelace";

firstLetterOfFirstName = lastName[0];
console.log(firstLetterOfFirstName) // = L

/* String Immutability */ //means they cannot be aletered once created //
// Example 
var myStr = "Jello World";
//Only change code below this line
myStr[0] = "H"; //Fix ME
myStr = "Hello world"; // FIXED

/* Bracket Notation to Find Nth Character in String */
var firstName = "Ada";
var secondLetterOfFirstName = firstName[1];

// Setup ANOTHER EXAMPLE
var lastName = "Lovelace";
var thirdLetterOfLastName = lastName[2];

/* Bracket Notation to Find Last Character in String */
var firstName = "Ada";
var lastLetterOfFirstName = firstName[firstName.length - 1];

// Setup ANOTHER EXAMPLE 
var lastName = "Lovelace";
var lastLetterOfLastName = lastName[lastName.length - 1];

/* Bracket Notation to Find Nth-to-Last Character in String */

// Example 
var firstName = "Ada";
var thirdLetterOfLastName = firstName[firstName.length - 3];

// Setup Another Example
var lastName = "Lovelace";
var secondToLastLetterOfLastName = lastName[lastName.length - 2];

/* Word Blanks */
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "";

  result += "The " + myAdjective + " " + myNoun + " " + " " + myVerb + " to the store.";

  return result;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
// = The big dog ran to the store quickly.
console.log(wordBlanks("bike", "slow", "flew", "slowly"));// = The slow bike flew to the store slowly.

/* Store Multiple Values with Arrays */
// Example
var ourArray = ["John", 23]; // Arrays always start and end with a bracket [] to show to beginning and ending of an array! and evert element in the array is seprated with a come (,) 

// Another Example 
var myArray = ["holly", 1];

/* Nested Arrays */
// Example
var ourArray = [["the universe", 42],["everything", 101010]]; // Also called a Multidimensional Array
// Another Example
var myArray = [["bulls". 23].["white Sox", 45]];

/* Access Array Data with Indexes */ 
// Example
var ourArray = [50,60,70];
var ourData = ourArray[0]; // Equals 50
// Setup ANOTHER EXAMPLE
var myArray = [50,60,70];
var myData = myArray[1]; // Equals 60
console.log(myData) // Equals 60

/* Modify Array Data With Indexes */
// Example
var ourArray = [18,64,99];
ourArray[1] = 45; // ourArray now equals [18,45,99].
// Setup Another Example
var myArray = [18,64,99];
myArray[0] = [45];
console.log(myArray) // myArray now equals [45,64,99]

/* Access Multi-Dimensional Arrays with Indexes */
// Example
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13,14]];

// To Access the Array inside the Array we use the double bracket as the first[] refers to the whole bracket within the bracket and the second[] refers to the element position within the bracket 
var myData = myArray[2][1];
console.log(myData); // equals 8 

/* Manipulate Arrays with push () */
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
// ourArray now equals ["Stimpson", "J", "cat", ["happy", "joy"]]
// Setup ANOTHER EXAMPLE
var myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog", 3])

/* Manipulate Arrays with pop() */
// Example 
var ourArray = [1,2,3];
var removedFromOurArray = ourArray.pop();
// removedFromOurArray now equals 3, and ourArray now equals [1,2]
// Setup Another Example
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();
console.log(myArray) // Equals [["John", 23]]

/* Manipulate Arrays with shift() */ // Similar to pop function except it removes the first element of the Array instead the final element!
// Example
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]]
// Setup ANOTHER EXAMPLE
var myArray = [["John", 23], ["dog", 3]];
var removedFromMyArray = myArray.shift();// removedFromMyArray now equals ["John", 23] and MyArray now equals ["dog", 3]

/* Manipulate Arrays with unshift() */
// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

//Setup ANOTHER EXAMPLE 
var myArray = [["John", 23], ["dog", 3]];
myArray.shift(); // ourArray now equals ["dog", 3]
myArray.unshift(["Paul", 35]);
// myArray now equals [["Paul", 35], ["dog", 3]];

/* Shopping List */
// Example
var myList = [["cereal", 3], ["milk", 2], ["bananas", 3], ["juice", 2], ["eggs", 12]]; // This is an Array of Arrays which is a Shopping List

/* Write Reusable Code with Functions */
//Example
fucntion ourReusableFunction() {
  console.log("Heyya, World");
}

ourReusableFunction(); // THE PARENTHESES ARE IMPORTANT

// Setup ANOTHER EXAMPLE 
function reusableFunction() {
  console.log("Hi world");
}

reusableFunction(); // Console should call the two Functions as [Heyya, World // Hi World]

/* Passing Values to Functions with Arguments */
// Example
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
ourFunctionWithArgs(10, 5); // Outputs 5
// Setup ANOTHER EXAMPLE 
function functionWithArgs(a, b){
  console.log(a + b);
}
functionWithArgs(10, 5); // Outputs 15

//==============================================//
        /* Global Scope and Functions */
//Example
// Declare your variable here
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;  // we dont need var Keyword since its scoped inside a function !
}

  // Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") { //!= is not equal
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal:" + oopsGlobal;
  }
  console.log(output);
}
fun1();
fun2();

/* Local Scope and Functions */
// Example
fucntion myLocalScope() {
  var myVar = 5; // THIS VARIABLE IS ONLY VISIBLE INSIDE THE FUNCTION!
  console.log(myVar);
}
myLocalScope();

console.log(myVar); //ReferenceError: myVar is not defined (/index.js:405) //Because it tried to access myVar outside the FUNCTIONS!

/* Global vs. Local Scope in Functions */
// Example
var outerWear = "T-Shirt"; // This is a global variable because it was declared outside the function!

function myOutfit() {
  var outerWear = "sweater";

  return outerWear;
}

console.log(myOutfit()); //Output Equals "sweater" // its because the Local variable "sweater" toke precedence over the global variable
console.log(outerWear); //Here we'll see the Output Equals "sweater"..."T-Shirt"

/* Return a Value from a Function with Return */
// EXAMPLE 
fucntion minusSeven(num) {
  return num - 7;
}

console.log(minusSeven(10)); //Outputs Equals 3

//Setup ANOTHER EXAMPLE 
function timesFive(num) {
  return num * 5;
}

console.log(timesFive(5)); //Output Equals 25

/* Understanding Undefined Value Returned from a Function */
//Example 
var sum = 0;
function addThree() {
  sum = sum + 3;
}

function addFive() {
  sum += 5; //if log this out it would be UNDEFINED 
}

/* Assignment with a Returned Value */
// Example 
var changed = 0;

 function change(num) {
   return (num + 5) / 3;
 }


changed = change(10);

// Setuo ANOTHER EXAMPLE 

var processed = 0;

 function processArg(num) {
   return (num + 3) / 5;
 }

processed = processArg(7); //Now processed equals the results of the mathematical expression (num + 3) / 5;

/* Stand in Line */
//Example
function nextInLine(arr, item) {
  // Your code here
  arr.push(item)
  return item;
}


var testArr = [1,2,3,4,5];

console.log("Before: " + JSON.stringify(testArr));
//JSON.stringify is a way to change an Array into a String that can easly be printed out to the screen!
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//Output 
/*
Before: [1,2,3,4,5]
1
After: [2,3,4,5,6]
*/

/* Boolean Values */
// Example
function welcomeToBooleans() {
  return false; //True = On, False = off.
}

/* Use Conditional Logic with If Statements */
// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No,it's false";
}
//Setup ANOTHER EXAMPLE
function trueOrFalse(wasThatTrue) {
  if (wasThatTrue) {
    return "YES, that was true";
  }
  return "No, that was false"

}

console.log(trueOrFalse(true)): // Outputs "YES, that was true"

/* Comparison with the Equality Operator */
//Example
function testEqual(Val) {
  if (Val == 12) { // = IS AN ASSIGNMENT SYMBOL == IS EQUAL 
    return "Equal";
  }
  return "Not Equal";
}

console.log(testEqual(10)); // Outputs "Not Equal"

/* Comparison with the Strict Equality Operator */
//Example 
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(testStrict(10)); // Outputs 

/* 
3 === 3  
3 === '3' 
=== Strict Equality Operator
these will be true if we were using the == signs
*/

/* Practice Comparing Different Values */
//Example
function compareEquality(a, b){
  if (a === b) {
    return "Equal";
  }
  return "Not Equal";
}

console.log(compareEquality(10, "10"));

/* Comparison with the Inequality (!=) Operator */
//Example 
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}

console.log(testNotEqual(10)); //Outputs "Not Equal"

/* Comparison with the Strict Inequality Operator */
//Example
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
} 

console.log(testNotEqual(10)); // Outputs "Not Equal"

/* Comparisons with the Logical And Operator */
// Example
fucntion testGreatThan(val) {
  if (val > 100) {  // 
    return "Over 100";
  }

  if (val < 10) {
    return "Over 10";
  }

  return "10 or Under";
}

console.log(testGreatThan(10)); // Outputs "10 or Under"

/* Comparison with the Greater Than OR Equal To Operator */
//Example
function testGreaterOrEqual(val) {
  if (val >= 20) {
    return "20 Or Over";
  }

  if (val >= 10) {
    return "10 Or Over";
  }
 return "Less than 10";
} 

console.log(testGreaterOrEqual(10)); // Outputs "10 Or Over"

/* Comparison with the Less Than Operator */
//Example
function testLessThan(val) {
  if (val < 25 ) {
    return "Under 25";
  }
  if (val < 55 ) { //TIP: YOU CAN REMEMBER THE LESS THAN SYMBOL " < " IF IT RESEMBLES TO THE LETTER " L " WHICH MEANS LESS THAN!
    return "Under 55";
  }
  return "55 or Over";
}

console.log(testLessThan(10));

/* Comparison with the Less Than Or Equal To Operator */
//Example
function testLessOrEqual(val) {
  if (val <= 12) {
    return "Smaller Than or Equal to 12";
  }
  if (val <= 24) {
    return "Smaller Than Or Equal to 24";
  }
  return "More than 25";
}

console.log(testLessOrEqual(10)); // Outputs "Smaller Than or Equal to 12"

/* Comparison with the Logical && Operator */
//Example
function testLogicalAnd(val) {
   if (val <= 50 && val >= 25) {
     return "Yes";
   }

   return "No";
}

console.testLogicalAnd(10);

/* Comparisons with the Logical Or Operator */
//Example
function testLogicalOr(val) {
  if (val < 10 || val > 20) {
    return "Outside";
  }

  return "Inside";
}

console.log(testLogicalOr(15)); // Outputs "Inside"

/* Else Statements */
//Example
function testElse(val) {
  var result = "";

  if (val > 5) {
    result = "Bigger than 5";
  } else {
    result = "5 or Smaller";
  }

  return result;
}

/* Else if Statement */
//Example
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  } else {
    return "Between 5 and 10";
  }
}

console.log(testElse(7)); // Outputs 

/* Logical Order in If Else Statements */
//Example
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if ( val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

console.log(orderMyLogic(3)); // Outputs "Less than 5"

/* Chaining If Else Statements */
//Example
function testSize(num) {
  if (num < 5) {
    return "Tiny";
  } else if (num < 10){
    return "Small";
  } else if (num < 15){
    return "Medium";
  } else if (num < 20){
    return "Large";
  } else { // we dont need the condition(num >= 20)
    return "Huge";
  }
}

console.log(testSize(7)); // Outputs "Small"
/* Golf Code */
// Example
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"]

function golfScore(par, strokes) {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes <= par - 1) {
    return names[2];
  } else if (strokes <= par) {
    return names[3];
  } else if (strokes <= par + 1) {
    return names[4];
  } else if (strokes <= par + 2) {
    return names[5];
  } else if (strokes <= par + 3) {
    return names[6];
  } 
}

console.log(golfScore(5, 4)); // Outputs "Birdie"

/* Switch Statements */
//Example
function caseInSwitch(val) {
  var answer = "";
  switch(val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break; // BREAKS ARE NECESSARY OR IT WILL SKIP TO NEXT CASE !
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }

  return answer;
}

console.log(caseInSwitch(1));  // Outputs alpha

/* Default Option in Switch Statements */
//Example
function switchOfStuff(val) {
  var answer = "";
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }
   return answer;
}

console.log(switchOfStuff("c")); //Outputs = "cat"

/* Multiple Identical Options in Switch Statements */
//Example
function sequentialSizes(val) {
  var answer = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }
  return answer;
}

console.log(sequentialSizes(1)); //Outputs "Low"

/* Replacing If Else Chains with Switch */
//Example
function chainToSwitch(val) {
  var answer = "";

  if (val === "bob"){
    answer = "Marley"
  } else if (val === 42) {
    answer = "The Answer";
  } else if (vla === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }
  return answer;
}

// CHANGING THE IF ELSE CHAINS TO SWITCH BELOW //

function chainToSwitch(val) {
  var answer = ""; 
  switch(val) {
    case "bob"
      answer = "Marley";
      break;
    case 42
      answer = "The Answer";
      break;
    case 1
      answer = "There is no #1";
      break;
    case 99
      answer = "Missed me by this much!";
      break;
    case 7
      answer = "Ate Nine";
      break;
  }

  return answer;
}

/* Returning Boolean Values from Functions */
//Example
function isLess(a, b) {

   if (a < b) {
     return true;
   } else {
     return false;
   }

   //=====BETTER METHOD======//Delete all above and replace!

   return a < b; // this is gonna be true or false , we can skip that whole IF ELSE statement logic!
console.log(isLess(10, 15)); //Outputs TRUE

/* Returning Early Pattern from Functions */
//Example
function abTest(a, b) {

  if (a < 0 || b < 0) {
    return undefined;
  }

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}
console.log(abTest(2,2)); //Outputs 8

/* Counting Cards */
//Example

var count = 0;

function cc(card) {
   switch(card) {
     case 2:
     case 3:
     case 4:
     case 5:
     case 6:
       count++;
       break;
     case 10:
     case "J":
     case "Q":
     case "K":
     case "A":
       count--;
       break;
   }

var holdbet = 'Hold'
    if (count > 0) {
      holdbet = 'Bet'
    }

  return count + "" + holdbet;
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(cc(4))

/* Build JavaScript Objects */
//Example

var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

var myDog = {
  "name": "Quincy",
  "legs": 3,
  "tails": 2,
  "friends" []
};

/* Accessing Object Properties with Dot(.) Notation */
//Example

var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

var hatValue = testObj.hat;      //Outputs ballcap
var shirtValue = testObj.shirt;  //Outputs jersey

/* Accessing Object Properties with Bracket Notation */
//Example
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

var entreeValue = testObj["an entree"];//Outputs hamburger
var drinkValue = testObj['the drink'];//Outputs water

/* Accessing Object Properties with Variables */
//Example
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

var playerNumber = 16;
var player = testObj[playerNumber]; //Ouputs Montana

/* Updating Object Properties */
//Example

var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.name = "Happy Camper";
console.log(ourDog.name) //Outputs "Happy Camper"

//Setup ANOTHER EXAMPLE

var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends" ["freeCodeCamp Campers"]
};

myDog.name = "Happy Coder";
console.log(myDog.name) //Outputs Happy Camper

/* Add New Properties to Object */
//Example
 var ourDog = {
   "name": "Camper",
   "legs": 4,
   "tails": 1,
   "friends": ["everything!"]
 };

 ourDog.bark = "bow-wow";

 var myDog = {
   "name": "Happy Coder",
   "legs": 4,
   "tails": 1,
   "friends": ["freeCodeCamp Campers"]
 };

 myDog['bark'] = "woof!";

/* Delete Properties From an Object */
//Example
 var ourDog = {
   "name": "Camper",
   "legs": 4,
   "tails": 1,
   "friends": ["everything!"],
   "bark": "bow-wow"
 };

 delete ourDog.bark; // Use the DELETE keyword!

//Setup ANOTHER EXAMPLE
 var myDog = {
   "name": "Happy Coder",
   "legs": 4,
   "tails": 1,
   "friends": ["freeCodeCamp Campers"],
   "bark": "woof"
 };

 delete myDog.tails; //The myDOg Object no long has "tails" Property!

 /* Using Objects for Lookups */
 //Example
 function phoneticLookup(val) {
   var result = "";

   var lookup = {
     "alpha": "Adams",
     "bravo": "Boston",
     "charlie": "Chicago",
     "delta": "Denver",
     "echo": "Easy",
     "foxtrot": "frank"
   };
   result = lookup[val];

   return result;
 }

console.log(phoneticLookup("charlie")); //Outputs chicago

/* Testing Objects For Properties */
//Example
var myObj = {
  gift: "pony",
  pet: "Kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {

  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "Not Found"
  }
}

console.log(checkObj{"hello"}); //Outputs Not Found

/*  Manipulating Complex Objects */
//Example
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },

  {
    "artist": "Beau Carnes",
    "title": "Cereal Man",
    "release_year": 2003,
    "formats": [
      "YouTube video"
    ]
  }
]

/* Accessing Nested Objects */
//Example
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
    },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"];
console.log(gloveBoxContents) // Outputs "maps"

/* Accessing Nested Arrays */
//Example 
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

var secondTree = myPlants[1].list[1]; //Outputs "pine"

/* Record Collection */
//Example
var Collection = {
  "2548": {
    "album": "Slippery When Wet",
    "artist": "Bon Jovi",
    "tracks": [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  "2468": {
    "album": "1999",
    "artist": "Prince",
    "tracks": [
      "1999",
      "Little Red Corvette"
    ]
  },
  "1245": {
    "artist": "Robert Palmer",
    "tracks": [ ]
  },
  "5439" {
    "album": "ABBA Gold"
  }
};

var CollectionCopy = JSON.parse(JSON.stringify(collection));

// Keep a copy of the collection for tests
function updateRecords(id, prop, value) {
   if (value === "") {
     delete collection[id][prop];
   } else if (prop === "tracks") {
     collection[id][prop] = collection[id][prop] || [];
     collection[id][prop].push(value);
   } else {
     collection[id][prop] = value;
   }

   return collection;
}

updateRecords(2468, "tracks", "test"); // test ADDED
console.log(updateRecords(5439, "artist", "ABBA")); //Outputs 5439: {album: "ABBA GOLD", artist:"ABBA"}

/* Iterate with While Loops */
//Example
var myArray = [];

var i = 0;
while(i < 5) {
   myArray.push(i);
   i++;
}

console.log(myArray); //Outputs [0, 1, 2, 3, 4]

/* Iterate with For Loops */
//Example
var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

var myArray = [];


for (var i = 1; i < 6; i++) {
  myArray.push(i);
}

console.log(myArray); //Outputs [1, 2, 3, 4, 5]

/*  Iterate Odd Numbers with a For Loop */
//Example
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

console.log(ourArray);

//Setup ANOTHER EXAMPLE
var myArray = [];

for (var i = 1; i < 10; i += 2) [
  myArray.push(i);
]

console.log(myArray); //Outputs [1, 3, 5, 7, 9]

/* Count Backwards with a For loop */
//Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

console.log(ourArray); //Outputs [10, 8, 6, 4, 2]

//Setup ANOTHER EXAMPLE

for (var i = 9; i > 0; i -+ 2){
  myArray.push(i);
}

console.log(myArray); //Outputs [9, 7, 5, 3, 1]

/* Iterate Through an Array with a For Loop */
//Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

console.log(ourTotal); //Outputs 42

//Setup ANOTHER EXAMPLE
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

console.log(total); //Outputs 20

/* Nesting For Loops */
//Example
function multiplyAll(arr) {
  var product = 1;

  for (var i=0; i < arr.length; i++) {
    for (var j=0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }

  return product;
}

var product = multiplyAll([[1,2],[3,4],[5,6,7]]);

console.log(product); //Outputs 5040

/* Iterate with Do ... While Loops */
//Example
var myArray = [];
var i = 10;

while (i < 5) {
    myArray.push(i);
    i++;
}

console.log(i, myArray); // Outputs 10,[]
//===== With the Do..While Loop its Different =====//

var myArray = [];
var i = 10;

 do {
    myArray.push(i);
    i++;     //First its gonna do these things and then its gonna check the conditions
}   while (i < 5)  //its gonna find that the condition is false and its gonna break out of the loop!

console.log(i, myArray); // Outputs 11,[10]

/* Profile Lookup */
//Example
var contacts = [
  {
     "firstName": "Akira",
     "lastName": "Laine",
     "number": "0543236543",
     "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
    "firstName": "Harry",
    "lastName": "Potter",
    "number": "0994372684",
    "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
    "firstName": "sherlock",
     "lastName": "Holmes",
     "number": "0487345643",
     "likes": ["Intriguing Cases", "Violin"]
  },
  {
    "firstName": "ilyas",
     "lastName": "Filali",
     "number": "unknown",
     "likes": ["JavaScript", "Gaming", "Foxes"]
  }
];

function lookupProfile(name, prop) {
   for (var i = 0; i < contacts.length; i++) {
     if(contacts[i].firstName === name) {
       return contacts[i][prop] || "No such Property";
     }
   }
   return "No Such Contact";
}

var data = lookupProfile("ilyas", "number);

console.log(data); // Ouputs unknown

/* Generate Random Fractions */
//Example 
function randomFraction() {

  return Math.random();
}

console.log(randomFraction());//Outputs 0.238137418798..
// [Math.random] could always be a number between 0 and 1 but it could not be 1!


/* Generate Random Whole Numbers */
//Example
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {


  return Math.floor(Math.random() * 10);
}

console.log(randomWholeNum()); // Everytime we load its a different random number !

/* Generate Random Whole Numbers within a Range */
//Example
function ourRandomRange(ourMin, ourMax) {

   return Math.floor(math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);


function randomRange(myMin, myMax) {

  return Math.floor(Math,random() * (myMax - myMin + 1)) + myMin;

}

var myRandom = randomRange(5, 15);

console.log(myRandom); //Outputs Randoms numbers between 5 -15

/* Use the parseInt Function */
//Example
fucntion convertToInteger(str) {
   return parseInt(str);
}

convertToInteger("56"); //Outputs a Number Integer

/* Use the parseInt Function with a Radix */
// The Radix Specify the base of the number in the string such as base 2, or base 7, or base 8, a base 2 would be binary one of the most common ones to use, also the default is base 10
//Example

function convertToInteger(str) {
   return parseInt(str, 2)

}

//covert this binary number into an integer
convertToInteger("10011");

/* Use the Conditional (Ternary) Operator */
//============================================//
// Ternary Operator is like a one line (IF ELSE) Expression !! 
// condition (just like an if statement) and then you'd have a question mark ? , after you'd have  what gonna happen if the condition is true (statement-if-true) then a colone (:), then whats gonna happen if the condition is false (statement-if-false)
//============================================//
//Example

function checkEqual(a, b) {
  if(a === b) {
    return true;
  }
 else {
    return false;
 }
} 
//====WITH TERNARY OPERATOR WE USE INSTEAD =======//

  return a === b ? true : false;

checkEqual(1, 2);

/* Use Mutiple Conditional (Ternary) Operators */
// We can Nest (Ternary Operators) Within each other which gives them more power!
//Example
 function checkSign(num) {
   return num > 0 ? "positive" : num < 0 ? "negative" : "zero"
 }

 console.log(checkSign(0));

 /* Differences Between the var and let Keywords */
 // Starting from ES6-2015 we can now declare with variables with let and cost !
 // let does not let you declare a variable twice !
 //Example

 var catName = "Quincy";
 var quote;             

 var catName = "Beau"; //this wouldnt be possible with using let !

 function catTalk() {
   "use strict"; //this enables strict mode which catches common coding mistakes and unsafe actions!
   // TIP : alot Of people would "use strict", at the top of a full javaScript file or maybe in just a function to catch coding mistakes such as if you create a variable and dont decalre it with [var, let or const]!

   catName = "Oliver";
   quote = catName + " says Meow!";


 }
 
catTalk();

/* Compare Scopes of the var and let Keywords */
// Another major difference between the var and let keywords is that when you declare a variable with var it is declared globaly or localy if declared inside a function! however "let" the scope of "let" is limited to the block statment or expression it was declared in!
// Example

function checkScope() {
  "use strict";
  //let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);// Getting outside the block we get an ERROR because its not defined, so that's another reason why people use let instead of var so that they can make sure the variable is only defined in the area they want it to be defined at !
  return i;
}

checkScope(); //Outputs 
// Block scope i is: "block scope"
// ReferenceError: i is not defined (/index.js:11)

//============================================//
/*Declare a Read-Only Variable with the const Keyword*/
//"const" has the same features as "let" but also "Read only" you cannot reassign a "const"!
//Example
function printManyTimes(str) {
  "use strict"

  const SENTENCE  = str + " is cool!"; // if we used "const" keyword instead of "var" we wouldnt be able to re use it ! //Outputs Error! 
  //TIP: if you know for sure! you won't reuse a variable always use CONST ! so you don't accidentaly reassign it when you don't mean to!
  //TIP2: ITS A GOOD PRACTICE TO USE ALL CAPS LETTER WHEN USING CONST! THATS ANOTHER WAY TO REMEMBER USING A CONSTANT!

  sentence = str + " is amazing!"

  for(var i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

}
printManyTimes("freeCodeCamp"); //Outputs "freeCodeCamp is amazing!"

/* Mutate an Array Declared with const */
//Example
const s = [5, 7, 2];
 function editInPlace() {
   "use strict";

   //s = [2, 5, 7];
   s[0] = 2;
   s[1] = 5;
   s[2] = 7;

 }
 editInPlace();

 console.log(s) //we should see the Outputs of the new array [2, 5, 7]

/* Prevent Object Mutation */
/* As seen previously a "Const" declaration alone doesnt really protect your data from mutation, if you have an object or an array, you can still mutate it even if it's declared with const */
// Using Object.freeze will prevent data mutation!
//================================================//
//Example

function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };

  Object.freeze(MATH_CONSTANTS); //Here we prevent it from changing !

  try {
    MATH_CONSTANTS.PI = 99; //HERE "TRY" tries to change
    
  } catch( ex ) {           // THEN GOES HERE TO CATCH IT UP!
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}

const PI = freezeObj();

console.log(PI);

/* Use Arrow Functions to Write Concise Anonymous Functions  */
// Example 
//Instead of :
  var magic = function() {
    return new Date();
  };
 
// Whenever we have an anonymous function we can write it this way!? Converting it to an arrow function makes it quicker to write!
  const magic = () => new Date();

/* Write Arrow Functions with Parameters */
//Example 
var myConcat = function(arr1, arr2) {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));
//This is how we convert the functions above to an arrow function!
const myConcat = (arr1, arr2) => arr1.concat(arr2);
  
console.log(myConcat([1, 2], [3, 4, 5])); // Ouputs [1, 2, 3, 4, 5]
//Voila!

/* Write Higher Order Arrow Functions */
//Example 
const realNUmberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
   const squaredIntegers = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
   return squaredIntegers;
};


const squaredIntegers = squareList(realNUmberArray);
console.log(squaredIntegers); //Outputs [16, 1764, 36]

/* Write Higher Order Arrow Functions */
// In order to create more flexible functions we can use default parameters:
//Example
const increment = (function() {
  return function increment(number, value = 1) {
    return number + value;
  }
})();
console.log(increment(5, 2)); //Outputs 7
console.log(increment(5));    //Outputs 6

/* Use the Rest Operator with Function Parameters */
//Example
const sum = (function() {
  return fucntion sum(x, y, z) {
     const args = [ x, y, z ];
     return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); //Ouputs 6 we can keep adding any number of arguments to (sum(1, 2, 3,))!

/*Use the Spread Operator to Evaluate Arrays In-Place*/
//Example
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
   arr2 = [...arr1]; //Spreading the content of arr1 into this array !! Another thing is that we cant just use the spread operator like this (...) we need to use bracket []!
   arr1[0] = 'potato'

})();
console.log(arr2); //Outputs ['JAN', 'FEB', 'MAR', 'APR', 'MAY']

/* Use Destructing Assignment to Assign Vriables from Objects */
//Example
var voxel = {x; 3.6, y: 7.4, z: 6.54 };

var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54

const { x : a, y : b, z : c } = voxel; // a = 3.6, b = 7.4, c = 6.54 == this is a quicker way of assigning things from an object into variables

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79
};

function getTempOfTmrw(avgTemperatures) {
  "use strict"

  //change code below this line
  const { tomorrow : tempOfTomorrow } = avgTemperatures; // This basically says get the tomorrow field from the AVG_TEMPERATURES object and assign it to the tempOfTomorrow variable
  return tempOfTomorrow;
}


console.log(getTempOfTmrw(AVG_TEMPERATURES)); //Should be 79 == So, we successfully used destructing to get the tomorrow variable out of AVG_TEMPERATURES

/* Destructuring Assignment with Nested Objects */
//Example
const LOCAL_FORECAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 }
};

function getMaxOfTmrw(forecast) {
  "use strict";

  const { tomorrow : {maxOfTomorrow = undefined }} = forecast;

  return maxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORECAST));//Outputs 84.6

/* Use Destructuring Assignment to Assign Variables from Arrays */
//Example 
const [z, x, , y] = [1, 2, 3, 4, 5, 6]; // we used Commas , to skip the wanted assignment !
console.log(z, x, y); // Outputs 1,2,4


let a = 8, b = 6;
(() => {
   "use strict"
   [a, b] = [b, a] //We can Use Destructuring of Arrays to switch the places of variables!
})();
//So instead of a being 8 and a being 6 now its gonna log as this:
console.log(a); //Outputs 6
console.log(b); //Outputs 8

/*Use Destructuring Assignment with the Rest Operator */
//Example
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
   
    const [ , , ...arr] = list; // We are telling the array to do nothing to the first two elements, everything else put into the arr variable - we also can assign the two numbers to different two variables instead!

    return arr;
}
const arr = removeFirstTwo(source);
console.log(arr);
console.log(source);

/* Use Destructing Assignment to Pass an Object as a Function's Parameters */
//Example
//This is commonly used with API calls, when you are getting information from an Ajax request or an API request, it will often have a lot more information than what you need, and you can use destructuring to get it down to what we actually want to work with!
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};
const half = (function() {

   return function half({ max, min }) {
     return (max + min) / 2.0;
   };
})();
console.log(stats);
console.log(half(stats));

/* Create Strings using Template Literals */
//Example
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

// Template Literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`; // A few advantages of using these backticks instead of quotation marks, are one, you can make multiline strings, another thing you can add single or double quotation marks right in the string without having to escape them, the third thin is you can put variables right in the string (anything in between the curly braces that start with the $ is JavaScript)

console.log(greeting); // Outputs Hello, my name is Zodiac Hasbro! I am 56 years old

//Setup Another Example
const result = {
   success: ["max-length", "no-amd", "prefer-arrow-functions"],
   failure: ["no-var", "var-on-top", "linebreak"],
   skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
   const resultDisplayArray = [];
    for (let i = 0; i < arr.length; i++) {
      resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`)
    }

   return resultDisplayArray;
}
/**
 *  makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`,
 *   `<li class="text-warning">linebreak</li> ]
 */
const resultDisplayArray = makeList(result.failure);

console.log(resultDisplayArray)

/* Write Concise Object Literal Declarations Using Simple Fields */
//Example 
const createPerson = (name, age, gender) => 
// {
//    return {
//       name: name,
//       age: age,
//       gender: gender
//    };

// };    ========AN EASIER WAY TO DO IT========:
({ name, age, gender }); //In one line similar output!

console.log(createPerson("Zodiac Hasbro", 56, "male"));
//Outputs {name:"Zodiac Hasbro", age: 56, gender: "male"}

/* Write Concise Declarative Functions */
//Example
const bicycle = {
   gear: 2,
   setGear: function(newGear) { // We can delete the keyword (function) for a shorter code and similar results!
     "use strict";
      this.gear = newGear;
   }
};

bicycle.setGear(3);
console.log(bicycle.gear); //Outputs

/* Use class Syntax to Define a Constructor Function */
//Example

// var SpaceShittle = function(targetPlanet){
//   this.targetPlanet = targetPlanet;
// } ===INSTEAD WE CAN USE CLASS SYNTAX ====:
class SpaceShuttle {
   constructor(targetPlanet){
     this.targetPlanet = targetPlanet;
 }
}
var zeus = new SpaceShuttle('Jupiter');

console.log(zeus.targetPlanet) // Outputs Jupiter

//Setup Another Example

function makeClass() {
  class Vegetable {
    constructor(name){
      this.name = name;
    }
  }
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); //Outputs carrot

/* Use getters and setters to Control Access to an Object */
//Example
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer(){
    return this._author;
  }
  // setter
  set writer(updateAuthor){
    this._author = updateAuthor;
  }
}

function makeClass() {
   class Thermostat {
     constructor(temp) {
       this._temp = 5/9 * (temp - 32);//Underscore before a variable signify that it's a private variable! that you're not supposed to access it outside of that scope or outside of that class!
     }
     //getter
     get temperature() {
       return this._temp;
     }
     //setter
     set temperature(updatedTemp) {
       this._temp = updatedTemp
     }
   }

  return Thermostat;
}
//getters and setter are accessed similar to properties 

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;// A key thing to look at is that there are no parenthesis after this! generally, if something is a function, you would see parenthesis after the function name! but if it's a variable or a property name, it's going to not have parenthesis!
thermos.temperature = 26;
temp = thermos.temperature; 
console.log(temp); // Outputs the new temperature 26

/*Understand the Difference Between import and require*/
//Example

import { capitalizedString } from "./string_function";
const cap = capitalizeString("hello!");

console.log(cap);

//we can't log out the capitalizedString, because there is no capitalizeString function in this file!
//after we imported now we can!

/* Use export to Reuse a Code Block */
//Example

/*Export More in Dept */
const capitalizedString = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
 }
 
 export { capitalizedString };
 
 export const foo = "bar";
 export const bar = "foo";
 
 
 //EXAMPLE ON HOW TO IMPORT EVERYTHING FROM A FILE!
 import * as /* Create object Name! */ from /*"File Name!"*/;
 
 /* Create an Export Fallback with export default */
 //Example
 //=== This is called Export Default, this is a fallback export and it's often used if you only want to export one thing from a file
 // So, let's say we want this to be our fallback export!
 export default function subtract(x,y) {return x - y;}
 
 /* Now To import a Default Export */

 /*
 import substract (if its not a default export you put curly braces around it, which we are not in this case cause its a Default Export!) from "math_functions"

 subtract(7,4);
 */

 //====Thank you for Reading t'ill the end!=========//
 //====And Remember ! "Use Your Code For Good!"===//

 
