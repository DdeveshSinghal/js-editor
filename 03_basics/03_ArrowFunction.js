const user = {
    username: "devesh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){         // when we call a function it gives undefined
//     let name = "rohit"
//     console.log(this.name);
// }

// const chai = function(){       // when we call a function it gives undefined
//     let name = "rohit"
//     console.log(this.name);
// }


/* in arrow function we can't use this function but regular function we can use this. */

// const chai = () =>{     // when we call a function it gives undefined
//     let name = "chotu"  
//     console.log(this.name);
// }
// chai()



// arrow function

// const addTwo = (num1,num2) => num1 + num2

const addTwo = (num1,num2) => ({username:"devesh"})
console.log(addTwo(4,5));
