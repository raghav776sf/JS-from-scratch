const user = {
    name: 'Raghav',
    id: 766,
    welcomeMessage: function(){
        console.log(`Hey ${this.name}, you just signedin.`)
        // console.log(this)
    }
}

// user.welcomeMessage()
user.name = 'Anuj'
// console.log(this)
// user.welcomeMessage()

// this refering the current context/value
// In browser global objcet is window object


function time(){
    let myName = "ak"
    console.log(this.myName)
}
// time()

// this only works in object, at function will get as undefined


// const arrowFun = () => {
//     let name = 'aaak'
//     console.log(this.name)
// }

// const arrowFun = (num1, num2) => {
//     return num1+num2
// }

// const arrowFun = (num1, num2) => num1+num2        //implicit return(not using return)

const arrowFun = (num1, num2) => (
    num1+num2
)

// In arrow fun. if we use {} then return is required and if we use () then return is not required.

console.log(arrowFun(1,8))