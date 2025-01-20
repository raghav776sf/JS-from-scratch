let a = "Anurag"   // Global-scope

if (true){             // block-scope
    let a = 10
    const b = 20
    // var c = 30
    // console.log("block:", a)
}

// console.log(a)
// console.log(b)
// console.log(c)

function one(){
    const myName = "Anurag"

    function two(){
        age: 27
        console.log(myName)
    }

    // console.log(age)
    two()
}

// one()

// A closure is a nested block that having access to the parent scope.
// Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.

if (true) {
   const position = "UI Developer";

    if (position == "UI Developer") {
      const  prmotion1 = "Backend Developer"
        // console.log(position + prmotion1);
    }

    // console.log(prmotion1);
}

// console.log(prmotion1)

console.log(test1(5))
function test1(num){
    return num+10
}

// console.log(variable(6))
const variable = function test2(num){
    return num+100
}

