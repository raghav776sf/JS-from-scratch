const myName = "Raghav"
const age = 27

console.log(`Hello, My name is ${myName} and I am ${age} years old`);
// the above is known as String interpolation

const favSports = new String('  Badminton ')
console.log(favSports[0])
console.log(favSports.toUpperCase())
console.log(favSports)
console.log(favSports.indexOf("t"));
console.log(favSports.includes("an"));

const test = favSports.trim()
console.log(test);

const url = "https://google%20JS.com"
console.log(url.replace("%20", "-"));

const fun = "I like to live each second of life!"
console.log(fun.split(' '))



