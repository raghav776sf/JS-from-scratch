// () -> parentheses, [] -> square bracket, {} -> bracess/curlly bracket

const myArrays = new Array(11, 22, 33, 44)
const myHeroes = ["Thor", "CA", "Dr. Strange"]
// console.log(myHeroes[2])
// console.log(myArrays[2])

// Arrays method

// myArrays.push(7)
// myArrays.pop()

myArrays.unshift(8)
myArrays.shift()
// console.log(myArrays)
// console.log(myArrays.includes(33))
// console.log(myArrays.indexOf(33))

const tArray = myArrays.join()
// console.log(tArray)
// console.log(typeof tArray)
// console.log(myArrays)

const mn1 = myArrays.slice(1,3)
// console.log("A" ,myArrays)
// console.log(mn1)

const mn2 = myArrays.splice(1,3)
// console.log("B" ,myArrays)
// console.log(mn2)

// splice is manupulating the orignal array while slice was not disturbing the orignal array

const dcHeroes = ['Superman', 'flas', 'Batman']
// myHeroes.push(dcHeroes)
const allHeroes = myHeroes.concat(dcHeroes)
// console.log(allHeroes)

// concat retruns new array while push adding elements in the existing array

const allNewHeroes = [...myHeroes, ...dcHeroes] // Spread
// console.log(allNewHeroes)

const testArray = [1,2,3,4,[5,6],7,[22,33,[8,9],0]]
const mergeTestArray = testArray.flat(Infinity);
// console.log(mergeTestArray)

console.log(Array.isArray("Anurag"))
console.log(Array.from("Anurag"))
console.log(Array.from({name: "Anurag"}))
console.log(Array.isArray(Array.from({name: "Anurag"})))

let marks1 = "awsa1"
let marks2 = "awsa2"
let marks3 = "awsa3"
console.log(Array.of(marks1, marks2, marks3))
console.log(Array.of(myHeroes, dcHeroes))