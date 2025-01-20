// if objects made by using constructer then it's only singleton obj:
//  Object.create

// obj literals
const mySymbol = Symbol('key1')

const user = {
    name: 'Anurag',
    age: 27,
    location: 'Dwarka,Delhi',
    email: 'raghavkesarwani@google.com',
    'full name': 'Anurag Kesarwani',
    [mySymbol]: "myKey@1"
}


// console.log(user.email)
// console.log(user['name'])
// console.log(user["full name"])
// console.log(typeof user[mySymbol])
// console.log(typeof mySymbol)

// user.email = 'AnuragKesarwani@openAi.com'
// Object.freeze(user)
// user.email = 'RaghavKesarwani@yaaho.com'
// console.log(user)
// console.log(typeof user[mySymbol])

user.messageWelcome = function(){
    console.log('Hello, how r u!')
}
user.messageWelcome1 = function(){
    console.log(`Hello ${this["full name"]}, how r u!`)
}

// console.log(user.messageWelcome())
// console.log(user.messageWelcome1())

// const newUser = new Object()    //singleton object
const newUser = {}                //non-singleton/literal object
// console.log(newUser)

newUser.id = 'a12324'
newUser.name = 'raghav'
newUser.isLoggedIn = false

// console.log(newUser)

const rejoinedUser = {
    name: {
        fullanme:{
            firstName: 'Anurag',
            lastName: "kesarwani",
            isNameChanged: {
                updated: false,
                notyetTillJoined: true
            }
        }
    },
    email: 'newuser@.com'
}

// console.log(rejoinedUser.name?.fullanme.isNameChanged.notyetTillJoined)

const obj1 = { 0: 'abcd', 1: 'wwq'}
const obj2 = { 4: 'bbb', 5: 'mmm'}

// const newObj = {obj1, obj2}
// const newObj = Object.assign({}, obj1, obj2)
const newObj = {...obj1, ...obj2}
// console.log(newObj)

// console.log(user)
// console.log(Object.keys(user))
// console.log(Object.values(user))
// console.log(Object.entries(user))
// console.log(user.hasOwnProperty('email'))

const techUI = {
    name: "react",
    developedBy: "fb"
}

// const {developedBy} = techUI
const {developedBy: author} = techUI
console.log(author)