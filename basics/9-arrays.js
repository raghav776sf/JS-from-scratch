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
console.log("A" ,myArrays)
console.log(mn1)

const mn2 = myArrays.splice(1,3)
console.log("B" ,myArrays)
console.log(mn2)

// splice is manupulating the orignal array while slice was not disturbing the orignal array