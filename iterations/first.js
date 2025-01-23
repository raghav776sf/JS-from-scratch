    // variable     condition  
for (let index = 0; index < 5; index++) {
    const element = index;
    if (element == 3){
        // console.log('3 is unique number.')
    }
    // console.log(element)
    
}

for (let i = 0; i < 5; i++) {
    // console.log(`outer loop value: ${i}`)
    for (let k = 0; k < 5; k++) {
        // console.log(`inner loop value: ${k} and outer-loop value: ${i}`) 
    }
}

// const myArray = ['Thor', 'IronMan', 'Dr.Satrange']
// console.log(`Array length is: ${myArray.length}.`)
// for (let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element)
// }


// for (let i = 1; i < 10; i++) {
//     if(i==5){
//         console.log(`5 is Dedected.`)
//         break;
//     }
//     console.log(`Value of i is : ${i}`)
// }

for (let i = 1; i < 10; i++) {
    if(i==5){
        console.log(`5 is Dedected.`)
        continue;            // continue skip that condition what we r checking using continue
    }
    console.log(`Value of i is : ${i}`)
}