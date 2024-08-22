var c = 300     // global scope

let a = 200
{                           // block scope
    let a = 10
    const b = 20
    var c = 30

    console.log("Inner: ", a);
    
}

// console.log(a);
// console.log(b);
// console.log(c);
console.log("outside: ", a);
