
const array = [1,2,3,4,5]
for (const element of array) {
    // console.log(element)
}

const message = 'hey GoodMorning!'
for (const element of message) {
    // console.log(element)
}

// Maps is {}: it's known for unique values and it's order depends on how we enter values inside that

const map = new Map()
map.set('UP', 'Uttar Pradesh')
map.set('NDLS', 'New Delhi')
map.set('PRYJ', 'Prayagraj')
map.set('UP', 'Uttar Pradesh')
map.set('UK', 'Uttrakhand')

// console.log(map)

for (const [key , value] of map) {
    // console.log(key, ':' ,value)
}

const obj = {
    game1: 'COC',
    game2: 'NFS'
}
// const test = new Map()
// test.set(obj)
// console.log(obj)
// for (const element of obj) {
//     // console.log(element)
// }

for (const key in obj) {
    // console.log(key)
    // console.log(key, obj[key])
}


const myArrays = ['java', 'js', 'react', 'Html']
for (const key in myArrays) {
    // console.log(key, myArrays[key])
}

// for of loop : only iterates value so it's works with an array
// for in loop : iterates both key & value or {}/[] as we want
// in map we are not able to iterates value while using for in loop

for (const key in map) {
    // console.log(key)
}
for (const key of map) {
    // console.log(key)
}

const newArray = ['js', 'java', 'react.js', 'html']  
newArray.forEach( function(val){         // normal fun
    // console.log(val)
})

newArray.forEach((val) => {
    // console.log(val)                 // arrow fun
})

function testing(item){
    // console.log(item)
}
newArray.forEach(testing);             // function reference 

newArray.forEach( (item, index, arr) => {
    // console.log(item, index, arr)    
})

const myArray = [
    {
        name: 'Anuj',
        dobY: '2001'
    },
    {
        name: 'Anurag',
        dobY: '1997'
    },
    {
        name: 'Rajat',
        dobY: '1998'
    }
]
myArray.forEach( (item)=> {
    // console.log(item.name)
})

const variable = newArray.forEach((item)=> {
    // console.log(item)          
    // return item;
})
// console.log(variable)
// forEach doesn't returning anything

const numbers = [1,2,3,4,5,6,7,8]
// const myNum = numbers.filter((num)=> num > 5)
const myNum = numbers.filter((num)=> {  
    return num>3
})
// if we r using {scope} in arrow fun then we have to use return and if we use () or write in single line then return is not required.
// console.log(myNum)

const mapMethod = numbers.map((i)=> i+10)
// console.log(mapMethod)

const chaining = numbers.map((num)=> num*10)
                        .map((i)=> i+5)
                        .filter((n)=> n >= 42)

// console.log(chaining)

const newNum = [1,2,3,4]
const total = newNum.reduce((acc, curr) => {
    console.log(`acc value: ${acc} and curr value: ${curr}`)
   return acc+curr
})
// console.log(total)