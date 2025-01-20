function name(){
    console.log('Anurag')
}

// name(); 

// function addTwoNumbers(num1, num2){  //Parameters
//     console.log(num1+num2)
// }

// addTwoNumbers(1, undefined)     //Argument

function addTwoNumbers(num1, num2){  //Parameters
    // let result = num1+num2;
    // return result;
    return num1+num2
    }

const newResult = addTwoNumbers(2,9)

// console.log(addTwoNumbers(2,7))
// console.log("Result:",newResult)

function welcomeMessage(username = 'user') {
    if(!username || username === undefined || username == ""){
        console.log('Please enter a valid name.')
        return
    }
    return `Welcome ${username}! you just loggedin.`
}

// console.log(welcomeMessage())

function calculateValue(val1, ...num){        // ... rest operator
    return num
}

// console.log(calculateValue(230, 32, 95, 75))

const userObj = {
    name: "Raghav",
    location: "NDLS"
}
function checkDetails(obj){
    console.log(`Myself ${obj.name} and my current location is ${obj.location}.`)
}

// checkDetails(userObj);
checkDetails({
    name: "Rajat",
    location: "Prayagraj"
})