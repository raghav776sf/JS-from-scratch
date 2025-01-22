location = "NCR"
// if (location == "UK"){
//     console.log('located in NCR.')
// } else {
//     console.log('not located in NCR.')
// }

// Operator Symbols
// <, >, <=, >=, ==, !=, ===, !==

// if (location == "NCR") console.log('located in NCR Area.');

const loggedInFromGoogle = true;
const loggedInFromEmail = false

if (loggedInFromEmail && loggedInFromGoogle) {  // && checking left and right true/Condition
    console.log('User loggedIn with AND.')
}

if (loggedInFromEmail || loggedInFromGoogle) {  // || checking atleast one should be true
    console.log('User loggedIn with OR.')
}

const month = "sep"
switch (month) {
    case "jan":
        console.log("month is jan.")
        break;
    case "sep":
        console.log("month is sep.")
        break;
    case "nov":
        console.log("month is nov.")
        break;

    default: console.log("default month.")
        break;
}

//* */ falsy values :

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//* */ truthy values:

// "0", "false", " "(space in string), [], {}, function(){}

const isArray = []
const isObject = {}

// if (isArray.length === 0){
//     console.log('Array is Empty.')
// }
if (Object.keys(isObject).length === 0){       
    console.log('Object is Empty.')
}
// Object.keys(isObject) || Object.values(isObject), converting into array to object keys/values.

//* */ Nullish coalescing operator ?? : null || undefined
// Nullish coalescing operator (??) using to handle null || undefined situation
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = null ?? 10 ?? 50

// console.log(val1)

// Terniary Operator ?

const isExist = 101
isExist != 101 ? console.log('its not equal to 101') : console.log('it is equal to 101')