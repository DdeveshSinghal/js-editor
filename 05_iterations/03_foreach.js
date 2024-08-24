const coding = ["js","ruby","java","python"]

// coding.forEach((value) => {
//     console.log(value);  
// })


// other method

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)



// coding.forEach((item,index,arr) =>{
//     console.log(item,index,arr);
// })


const arrObject = [
    {
        language: "Javascript",
        file: "js"
    },
    {
        language: "Java",
        file: "java"
    },
    {
        language: "Python",
        file: "py"
    }
]

arrObject.forEach((item) =>{
    console.log(item.language,item.file);
})